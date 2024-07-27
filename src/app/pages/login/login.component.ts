import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SLEEPY_OPTIONS } from '../../shared/constants/form.constant';
import { InputComponent } from '../../shared/components/form/input/input.component';
import {
  LOGIN_ERROR_STATE,
  LOGIN_PLACEHOLDERS,
  LOGIN_VALIDATORS,
} from './constants/login.constant';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { getTrimmedString } from '../../shared/utils/form/form.util';
import { HttpErrorResponse } from '@angular/common/http';
import { getLoginErrorMessage } from '../../shared/services/app/auth-user/helpers/auth-user.helper';
import { NgIf } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';
import { AppRoutes } from '../../shared/enums/app-routes.enum';

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
  readonly errorMsg$ = this.authFacade.errorMsg$;

  readonly placeholders = LOGIN_PLACEHOLDERS;
  readonly errorState = LOGIN_ERROR_STATE;
  readonly loginFormKey = LoginFormKey;
  readonly appRoutes = AppRoutes;

  readonly formGroup = this.fb.nonNullable.group({
    [LoginFormKey.Email]: ['', LOGIN_VALIDATORS[LoginFormKey.Email]],
    [LoginFormKey.Password]: ['', LOGIN_VALIDATORS[LoginFormKey.Password]],
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
      .subscribe(() => {
        this.router
          .navigate([AppRoutes.Messenger])
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
