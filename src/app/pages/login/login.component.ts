import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  SLEEPY_OPTIONS,
} from '../../shared/constants/form.constant';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { InputComponent } from '../../shared/components/form/input/input.component';
import {
  LOGIN_ERROR_STATE,
  LOGIN_PLACEHOLDERS,
} from './constants/login.constant';
import { AppPages } from '../../app.routes';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { BehaviorSubject, catchError, finalize, throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { getTrimmedString } from '../../shared/utils/form/form.util';
import { HttpErrorResponse } from '@angular/common/http';
import { getLoginErrorMessage } from '../../shared/services/app/auth-user/helpers/auth-user.helper';
import { NgIf } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    RouterLink,
    PushPipe,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  readonly placeholders = LOGIN_PLACEHOLDERS;
  readonly errorState = LOGIN_ERROR_STATE;
  readonly loginFormKey = LoginFormKey;
  readonly appPages = AppPages;

  readonly formGroup = this.formBuilder.nonNullable.group({
    [LoginFormKey.Email]: ['', [Validators.required, CustomValidators.email()]],
    [LoginFormKey.Password]: [
      '',
      [Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)],
    ],
  });

  readonly errorMessage$ = new BehaviorSubject<string>('');

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
    private readonly authFacade: AuthFacade,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.errorMessage$.complete();
  }

  onLogin(): void {
    if (this.formGroup.disabled) {
      return;
    }

    this.trim();

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.formGroup.disable(SLEEPY_OPTIONS);

    const { email, password } = this.formGroup.getRawValue();

    this.authUserService
      .login$({ email, password })
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          this.errorMessage$.next(getLoginErrorMessage(errorResponse));
          return throwError(() => errorResponse);
        }),
        finalize(() => {
          this.formGroup.enable(SLEEPY_OPTIONS);
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.router
          .navigate([AppPages.Messenger])
          .then(() => this.authFacade.setIsAuth(true));
      });
  }

  private trim(): void {
    [
      this.formGroup.get(LoginFormKey.Email),
      this.formGroup.get(LoginFormKey.Password),
    ].forEach(control => {
      if (!control) {
        return;
      }

      control.setValue(getTrimmedString(control.value), SLEEPY_OPTIONS);
    });
  }
}
