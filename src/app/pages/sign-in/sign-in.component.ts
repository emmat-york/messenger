import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInKeys } from './enums/sign-in.enums';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { LabelComponent } from '../../shared/components/label/label.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthFacade } from '../../shared/services/facade/auth.facade';
import { FormExtension } from '../../shared/utils/form-extension/form-extension.util';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MIN_PASSWORD_LENGTH } from '../../shared/constants/auth.constants';
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
    TextInputComponent,
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
  extends FormExtension<SignInKeys>
  implements OnInit, OnDestroy
{
  errorMessage$ = this.authFacade.errorMessage$;
  signInKeys = SignInKeys;

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

  onSignIn(): void {
    if (!this.isSubmittable) {
      return;
    }

    this.authFacade.signIn(this.formGroup.value);
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      [SignInKeys.Login]: ['', [Validators.required, CustomValidators.email()]],
      [SignInKeys.Password]: [
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
          [SignInKeys.Login]: {
            [ValidatorKeys.required]: state['Validation.required'],
            [ValidatorKeys.email]: state['Validation.email'],
          },
          [SignInKeys.Password]: {
            [ValidatorKeys.required]: state['Validation.required'],
            [ValidatorKeys.password]: state['Validation.password'],
            [ValidatorKeys.minlength]: state['Validation.minlength'],
          },
        };
      });
  }
}
