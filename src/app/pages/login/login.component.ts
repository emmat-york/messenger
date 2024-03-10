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
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/form.constant';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { LoginFormGroup } from './interfaces/login.interface';
import { LOGIN_ERROR_STATE, LOGIN_LABELS } from './constants/login.interface';
import { AppPages } from '../../app.routes';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
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
    });

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
  ) {}

  onLogin(): void {
    this.authUserService
      .login$(this.formGroup.getRawValue())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }
}
