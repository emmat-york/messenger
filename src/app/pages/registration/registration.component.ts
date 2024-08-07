import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  SLEEPY_OPTIONS,
} from '../../shared/constants/form.constant';
import { SignUpFormKey } from './enums/registration.enum';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { REGISTRATION_ERROR_STATE } from './constants/registration.constant';
import { HttpErrorResponse } from '@angular/common/http';
import { getRegistrationErrorMessage } from '../../shared/services/app/auth-user/helpers/auth-user.helper';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';
import { trim } from '../../shared/utils/form/form.util';
import { CustomValidators } from '../../shared/utils/validators/validators.util';

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
  readonly errorState = REGISTRATION_ERROR_STATE;
  readonly signUpFormKey = SignUpFormKey;

  readonly formGroup = this.fb.nonNullable.group({
    [SignUpFormKey.Email]: ['', [Validators.required, CustomValidators.email()]],
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
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef,
    private readonly authFacade: AuthFacade,
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.authFacade.setErrorMsg('');
  }

  submit(): void {
    if (this.formGroup.disabled) {
      return;
    }

    trim(
      [
        this.formGroup.controls[SignUpFormKey.Email],
        this.formGroup.controls[SignUpFormKey.Password],
      ],
      SLEEPY_OPTIONS,
    );

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
