import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  SLEEPY_OPTIONS,
  VALIDATION_MESSAGES,
} from '../../shared/constants/form.constant';
import { InputComponent } from '../../shared/components/input/input.component';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { trim } from '../../shared/utils/form.util';
import { HttpErrorResponse } from '@angular/common/http';
import { getLoginErrorMessage } from '../../shared/services/app/auth-user/auth-user.util';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';
import { CustomValidators } from '../../shared/utils/validators.util';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';

export enum LoginFormKey {
  Email = 'email',
  Password = 'password',
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent, RouterLink, PushPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  readonly errorMsg$ = this.authFacade.errorMsg$;

  readonly loginFormKey = LoginFormKey;
  readonly errorState = {
    [LoginFormKey.Email]: {
      [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
      [ValidatorKeys.email]: VALIDATION_MESSAGES[ValidatorKeys.email],
    },
    [LoginFormKey.Password]: {
      [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
      [ValidatorKeys.minlength]:
        VALIDATION_MESSAGES[ValidatorKeys.minlength](MIN_PASSWORD_LENGTH),
    },
  };

  readonly formGroup = this.formBuilder.group({
    [LoginFormKey.Email]: ['', [Validators.required, CustomValidators.email()]],
    [LoginFormKey.Password]: [
      '',
      [Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)],
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
      .login$(this.formGroup.getRawValue())
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          this.authFacade.setErrorMsg(getLoginErrorMessage(errorResponse));
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
