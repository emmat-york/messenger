import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  SLEEPY_OPTIONS,
} from '../../shared/constants/form.constant';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { LoginFormGroup } from './interfaces/login.interface';
import { LOGIN_ERROR_STATE, LOGIN_LABELS } from './constants/login.constant';
import { AppPages } from '../../app.routes';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { BehaviorSubject, catchError, finalize, throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { getTrimmedString } from '../../shared/helpers/input.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { getLoginErrorMessage } from '../../shared/services/app/auth-user/helpers/auth-user.helper';
import { NgIf } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { CheckboxComponent } from '../../shared/components/form/checkbox/checkbox.component';
import { PopoverTargetDirective } from '../../shared/directives/popover-target/popover-target.directive';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';
import { PopOverDirective } from '../../shared/directives/pop-over/pop-over.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    RouterLink,
    NgIf,
    PushPipe,
    CheckboxComponent,
    PopoverTargetDirective,
    TooltipComponent,
    PopOverDirective,
  ],
})
export class LoginComponent {
  readonly errorState = LOGIN_ERROR_STATE;
  readonly labels = LOGIN_LABELS;
  readonly loginFormKey = LoginFormKey;
  readonly appPages = AppPages;

  readonly formGroup: FormGroup<LoginFormGroup> =
    this.formBuilder.nonNullable.group({
      [LoginFormKey.Email]: [
        '',
        [Validators.required, CustomValidators.email()],
      ],
      [LoginFormKey.Password]: [
        '',
        [Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)],
      ],
      [LoginFormKey.RememberMe]: [false],
    });

  serverErrorMessage$ = new BehaviorSubject<string>('');

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
    private readonly router: Router,
  ) {}

  onLogin(): void {
    if (this.formGroup.disabled) {
      return;
    }

    this.removeWhiteSpaceFromFields();

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
          const message = getLoginErrorMessage(errorResponse);
          this.serverErrorMessage$.next(message);

          return throwError(() => message);
        }),
        finalize(() => {
          this.formGroup.enable(SLEEPY_OPTIONS);
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.router.navigate([AppPages.Messenger]));
  }

  private removeWhiteSpaceFromFields(): void {
    [
      this.control(LoginFormKey.Email),
      this.control(LoginFormKey.Password),
    ].forEach(control => {
      control.setValue(getTrimmedString(control.getRawValue()), SLEEPY_OPTIONS);
    });
  }

  private control<Key extends LoginFormKey>(key: Key): LoginFormGroup[Key] {
    return this.formGroup.controls[key];
  }
}
