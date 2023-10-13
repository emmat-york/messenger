import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInKey } from './enums/sign-in.enums';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { LabelComponent } from '../../shared/components/label/label.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { NgIf } from '@angular/common';
import { AuthFacade } from '../../shared/services/facades/auth.facade';
import { FormGroupExtension } from '../../shared/utils/form-group-extension/form-group-extension.util';
import { CustomValidators } from '../../shared/utils/validators/validators.util';
import { ControlStateClasses } from '../../shared/components/text-input/interfaces/text-input.interfaces';

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
  extends FormGroupExtension<SignInKey>
  implements OnInit
{
  signInKey = SignInKey;

  constructor(private authFacade: AuthFacade) {
    super();
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  onSignIn(): void {
    if (this.formGroup.invalid || this.formGroup.disabled) {
      return;
    }

    this.authFacade.signIn(this.formGroup.value);
  }

  getControlStateClasses(name: SignInKey): ControlStateClasses | null {
    if (!this.getControl(name).touched) {
      return null;
    }

    return this.getControl(name).errors ? 'invalid' : 'valid';
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
}
