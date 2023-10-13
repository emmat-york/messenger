import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInKey } from './enums/sign-in.enums';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabelComponent } from '../../shared/components/label/label.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { NgIf } from '@angular/common';
import { AuthFacade } from '../../shared/services/facade/auth.facade';
import { FormExtension } from '../../shared/utils/form-extension/form-extension.util';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent
  extends FormExtension<SignInKey>
  implements OnInit
{
  signInKey = SignInKey;

  constructor(
    private translateService: TranslateService,
    private authFacade: AuthFacade,
  ) {
    super();
  }

  ngOnInit(): void {
    this.setErrorState();
    this.initFormGroup();
  }

  onSignIn(): void {
    if (this.formGroup.invalid || this.formGroup.disabled) {
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
          Validators.minLength(12),
        ],
      ],
    });
  }

  private setErrorState(): void {
    this.errorState = {
      [SignInKey.Login]: {
        [ValidatorKeys.required]: 'required',
        [ValidatorKeys.email]: 'email',
      },
      [SignInKey.Password]: {
        [ValidatorKeys.required]: 'required',
        [ValidatorKeys.password]: 'password',
        [ValidatorKeys.minlength]: 'minLength',
      },
    };
  }
}
