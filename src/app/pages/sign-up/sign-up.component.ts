import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ErrorMessageComponent } from '../../shared/components/form/error-message/error-message.component';
import { InputComponent } from '../../shared/components/form/input/input.component';
import { LabelComponent } from '../../shared/components/form/label/label.component';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { AuthFacade } from '../../shared/services/facade/auth.facade';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/auth.constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';
import { FormExtension } from '../../shared/utils/form-extension/form-extension.util';
import { SignUpKeys } from './enums/sign-up.enums';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
  imports: [
    AsyncPipe,
    ButtonComponent,
    ErrorMessageComponent,
    InputComponent,
    LabelComponent,
    LanguageSwitcherComponent,
    RouterLink,
    ReactiveFormsModule,
    TranslateModule,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent
  extends FormExtension<SignUpKeys>
  implements OnInit, OnDestroy
{
  errorMessage$ = this.authFacade.errorMessage$;
  signUpKeys = SignUpKeys;

  constructor(private authFacade: AuthFacade) {
    super();
  }

  ngOnInit(): void {
    this.setErrorState();
    this.initFormGroup();
  }

  ngOnDestroy(): void {
    this.authFacade.setErrorMessage(null);
  }

  onSignUp(): void {
    if (!this.isSubmittable) {
      return;
    }

    this.authFacade.signUp(this.formGroup.value);
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      [SignUpKeys.Login]: ['', [Validators.required, CustomValidators.email()]],
      [SignUpKeys.Password]: [
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
    this.translate
      .stream(
        [
          'Validation.required',
          'Validation.minlength',
          'Validation.password',
          'Validation.email',
        ],
        { minlength: MIN_PASSWORD_LENGTH },
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        this.errorState = {
          [SignUpKeys.Login]: {
            [ValidatorKeys.required]: state['Validation.required'],
            [ValidatorKeys.email]: state['Validation.email'],
          },
          [SignUpKeys.Password]: {
            [ValidatorKeys.required]: state['Validation.required'],
            [ValidatorKeys.password]: state['Validation.password'],
            [ValidatorKeys.minlength]: state['Validation.minlength'],
          },
        };
      });
  }
}
