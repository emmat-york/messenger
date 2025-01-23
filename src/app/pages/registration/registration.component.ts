import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  MIN_USER_NAME_LENGTH,
  SLEEPY_OPTIONS,
  VALIDATION_MESSAGES,
} from '../../shared/constants/form.constant';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { getRegistrationErrorMessage } from '../../shared/services/app/auth-user/auth-user.util';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';
import { trim } from '../../shared/utils/form.util';
import { CustomValidators } from '../../shared/utils/validators.util';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';

export enum SignUpFormKey {
  Email = 'email',
  UserName = 'userName',
  Password = 'password',
}

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent, RouterLink, PushPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnDestroy {
  readonly errorMsg$ = this.authFacade.errorMsg$;

  readonly signUpFormKey = SignUpFormKey;
  readonly errorState = {
    [SignUpFormKey.Email]: {
      [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
      [ValidatorKeys.email]: VALIDATION_MESSAGES[ValidatorKeys.email],
    },
    [SignUpFormKey.UserName]: {
      [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
      [ValidatorKeys.minlength]:
        VALIDATION_MESSAGES[ValidatorKeys.minlength](MIN_USER_NAME_LENGTH),
    },
    [SignUpFormKey.Password]: {
      [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
      [ValidatorKeys.password]: VALIDATION_MESSAGES[ValidatorKeys.password],
      [ValidatorKeys.minlength]:
        VALIDATION_MESSAGES[ValidatorKeys.minlength](MIN_PASSWORD_LENGTH),
    },
  };

  readonly formGroup = this.formBuilder.group({
    [SignUpFormKey.Email]: ['', [Validators.required, CustomValidators.email()]],
    [SignUpFormKey.UserName]: [
      '',
      [Validators.required, Validators.minLength(MIN_USER_NAME_LENGTH)],
    ],
    [SignUpFormKey.Password]: [
      '',
      [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        CustomValidators.password(),
      ],
    ],
  });

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef,
    private readonly authFacade: AuthFacade,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.authFacade.setErrorMsg('');
  }

  submit(): void {
    if (this.formGroup.disabled) {
      return;
    }

    trim(Object.values(this.formGroup.controls), SLEEPY_OPTIONS);

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.formGroup.disable(SLEEPY_OPTIONS);

    this.authUserService
      .registration$(this.formGroup.getRawValue())
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          this.authFacade.setErrorMsg(getRegistrationErrorMessage(errorResponse));
          return EMPTY;
        }),
        finalize(() => {
          this.formGroup.enable(SLEEPY_OPTIONS);
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.router.navigate(['messenger']));
  }
}
