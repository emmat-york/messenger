import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/form.constant';
import { LoginFormGroup } from './interfaces/login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup<LoginFormGroup>;
  isLoading = false;

  readonly loginFormKey = LoginFormKey;

  constructor(
    private readonly authService: AuthService,
    private readonly destroyRef: DestroyRef,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(): void {
    this.authService
      .login$(this.formGroup.getRawValue())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }

  private initForm(): void {
    this.fb.nonNullable.group({
      [LoginFormKey.Email]: ['', [Validators.required]],
      [LoginFormKey.Password]: [
        '',
        [Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)],
      ],
    });
  }
}
