import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormKey } from './enums/login.enum';
import { LoginForm } from './interfaces/login.interface';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup<LoginForm>;

  readonly loginFormKey = LoginFormKey;

  constructor(
    @Inject(DestroyRef) private readonly destroyRef: DestroyRef,
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(): void {
    this.authService
      .login$(this.formGroup.getRawValue().phone)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }

  private initForm(): void {
    this.fb.nonNullable.group({
      [LoginFormKey.Phone]: ['', [Validators.required]],
    });
  }
}
