import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/form.constant';
import { CustomValidators } from '../../shared/utils/validators/validators.util';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent],
})
export class LoginComponent {
  formGroup = this.formBuilder.nonNullable.group({
    [LoginFormKey.Email]: ['', [Validators.required, CustomValidators.email()]],
    [LoginFormKey.Password]: [
      '',
      [Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)],
    ],
  });

  isLoading = false;

  readonly loginFormKey = LoginFormKey;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
  ) {}

  onLogin(): void {
    this.authService
      .login$(this.formGroup.getRawValue())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }
}
