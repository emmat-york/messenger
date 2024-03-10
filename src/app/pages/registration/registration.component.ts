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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MIN_PASSWORD_LENGTH,
  SLEEPY_OPTIONS,
} from '../../shared/constants/form.constant';
import { SignUpFormKey } from './enums/registration.enum';
import { getTrimmedString } from '../../shared/helpers/input.helper';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { AppPages } from '../../app.routes';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import {
  REGISTRATION_ERROR_STATE,
  REGISTRATION_LABELS,
} from './constants/registration.constant';
import { NgIf } from '@angular/common';
import { SignUpFormGroup } from './interfaces/registration.interface';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    RouterLink,
    NgIf,
  ],
})
export class RegistrationComponent {
  readonly errorState = REGISTRATION_ERROR_STATE;
  readonly labels = REGISTRATION_LABELS;
  readonly signUpFormKey = SignUpFormKey;
  readonly appPages = AppPages;

  readonly formGroup: FormGroup<SignUpFormGroup> =
    this.formBuilder.nonNullable.group({
      [SignUpFormKey.Email]: [
        '',
        [Validators.required, CustomValidators.email()],
      ],
      [SignUpFormKey.Password]: [
        '',
        [
          Validators.required,
          Validators.minLength(MIN_PASSWORD_LENGTH),
          CustomValidators.password(),
        ],
      ],
    });

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly destroyRef: DestroyRef,
    private readonly router: Router,
  ) {}

  onRegistration(): void {
    if (this.formGroup.disabled) {
      return;
    }

    this.removeWhiteSpaceFromFields();

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.formGroup.disable(SLEEPY_OPTIONS);

    this.authUserService
      .registration$(this.formGroup.getRawValue())
      .pipe(
        finalize(() => {
          this.formGroup.enable(SLEEPY_OPTIONS);
          this.cdRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.router.navigate([AppPages.Messenger]));
  }

  private removeWhiteSpaceFromFields(): void {
    Object.values(this.formGroup.controls).forEach(control => {
      control.setValue(getTrimmedString(control.getRawValue()), SLEEPY_OPTIONS);
    });
  }
}
