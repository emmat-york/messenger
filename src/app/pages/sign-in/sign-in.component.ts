import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInKey } from './enums/sign-in.enum';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { LabelComponent } from '../../shared/components/form/label/label.component';
import { ErrorMessageComponent } from '../../shared/components/form/error-message/error-message.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthFacade } from '../../store/auth/auth.facade';
import { FormExtension } from '../../shared/utils/form-extension/form-extension.utilite';
import { CustomValidators } from '../../shared/utils/validators/validators.utilite';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/auth.constant';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
  imports: [
    ReactiveFormsModule,
    InputComponent,
    TranslateModule,
    LabelComponent,
    ErrorMessageComponent,
    NgIf,
    AsyncPipe,
    LanguageSwitcherComponent,
    RouterLink,
    ButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent
  extends FormExtension<SignInKey>
  implements OnInit, OnDestroy
{
  errorMessage$ = this.authFacade.errorMessage$;
  signInKey = SignInKey;

  constructor(private authFacade: AuthFacade) {
    super();
  }

  ngOnInit(): void {
    this.initFormGroup();
    this.setErrorState();
  }

  ngOnDestroy(): void {
    this.authFacade.setErrorMessage(null);
  }

  onSignIn(): void {
    if (!this.isSubmittable) {
      return;
    }

    this.authFacade.signIn(this.formGroup.value);
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      [SignInKey.Login]: ['', [Validators.required, CustomValidators.email()]],
      [SignInKey.Password]: [
        '',
        [
          Validators.required,
          CustomValidators.password(),
          Validators.minLength(MIN_PASSWORD_LENGTH),
        ],
      ],
    });
  }

  private setErrorState(): void {
    this.errorState = {
      [SignInKey.Login]: {
        [ValidatorKeys.required]: this.translate.instant('Validation.required'),
        [ValidatorKeys.email]: this.translate.instant('Validation.email'),
      },
      [SignInKey.Password]: {
        [ValidatorKeys.required]: this.translate.instant('Validation.required'),
        [ValidatorKeys.password]: this.translate.instant('Validation.password'),
        [ValidatorKeys.minlength]: this.translate.instant('Validation.minlength', {
          [ValidatorKeys.minlength]: MIN_PASSWORD_LENGTH,
        }),
      },
    };
  }
}
