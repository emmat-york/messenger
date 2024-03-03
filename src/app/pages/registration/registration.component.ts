import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  MIN_USER_NAME_LENGTH,
  SLEEPY_OPTIONS,
} from '../../shared/constants/form.constant';
import { RegistrationFormKey } from './enums/registration.enum';
import { getTrimmedString } from '../../shared/helpers/input.helper';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { ErrorMessageComponent } from '../../shared/components/form/error-message/error-message.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { AppPages } from '../../app.routes';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import {
  REGISTRATION_ERROR_STATE,
  REGISTRATION_LABELS,
} from './constants/registration.constant';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ErrorMessageComponent,
    ButtonComponent,
    NgIf,
  ],
})
export class RegistrationComponent {
  formGroup = this.formBuilder.nonNullable.group({
    [RegistrationFormKey.Email]: [
      '',
      [Validators.required, CustomValidators.email()],
    ],
    [RegistrationFormKey.Password]: [
      '',
      [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        CustomValidators.password(),
      ],
    ],
    [RegistrationFormKey.UserName]: [
      '',
      [Validators.required, Validators.minLength(MIN_USER_NAME_LENGTH)],
    ],
  });

  isLoading = false;

  readonly registrationFormKey = RegistrationFormKey;
  readonly errorState = REGISTRATION_ERROR_STATE;
  readonly labels = REGISTRATION_LABELS;

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
    private readonly router: Router,
  ) {}

  onRegistration(): void {
    if (this.formGroup.disabled || this.isLoading) {
      return;
    }

    this.removeWhiteSpaceFromFields();

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const { email, password, userName } = this.formGroup.getRawValue();
    this.isLoading = true;

    this.authUserService
      .registration$({ email, password })
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.router.navigate([AppPages.Messenger]));
  }

  private removeWhiteSpaceFromFields(): void {
    Object.values(this.formGroup.controls).forEach(
      (control: FormControl<string>) => {
        control.setValue(
          getTrimmedString(control.getRawValue()),
          SLEEPY_OPTIONS,
        );
      },
    );
  }
}
