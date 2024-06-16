import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SLEEPY_OPTIONS } from '../../shared/constants/form.constant';
import { SignUpFormKey } from './enums/registration.enum';
import { getTrimmedString } from '../../shared/utils/form/form.util';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { catchError, finalize, throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import {
  REGISTRATION_ERROR_STATE,
  REGISTRATION_PLACEHOLDERS,
  REGISTRATION_VALIDATORS,
} from './constants/registration.constant';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { getRegistrationErrorMessage } from '../../shared/services/app/auth-user/helpers/auth-user.helper';
import { PushPipe } from '@ngrx/component';
import { AuthFacade } from '../../store/auth/auth.facade';
import { AppRoutes } from '../../shared/enums/app-routes.enum';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
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
export class RegistrationComponent implements OnDestroy {
  readonly errorMsg$ = this.authFacade.errorMsg$;

  readonly placeholders = REGISTRATION_PLACEHOLDERS;
  readonly errorState = REGISTRATION_ERROR_STATE;
  readonly signUpFormKey = SignUpFormKey;
  readonly appRoutes = AppRoutes;

  readonly formGroup = this.fb.nonNullable.group({
    [SignUpFormKey.Email]: REGISTRATION_VALIDATORS[SignUpFormKey.Email],
    [SignUpFormKey.Password]: [
      '',
      REGISTRATION_VALIDATORS[SignUpFormKey.Password],
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

  onRegistration(): void {
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
      .registration$(this.formGroup.getRawValue())
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          this.authFacade.setErrorMsg(
            getRegistrationErrorMessage(errorResponse),
          );

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
          .navigate([AppRoutes.Messenger])
          .then(() => this.authFacade.setIsAuth(true));
      });
  }

  private trim(): void {
    [
      this.formGroup.get(SignUpFormKey.Email),
      this.formGroup.get(SignUpFormKey.Password),
    ].forEach(control => {
      if (!control) {
        return;
      }

      control.setValue(getTrimmedString(control.value), SLEEPY_OPTIONS);
    });
  }
}
