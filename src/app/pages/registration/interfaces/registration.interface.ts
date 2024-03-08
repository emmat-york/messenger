import { FormControl } from '@angular/forms';
import { SignUpFormKey } from '../enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';

export interface SignUpFormGroup {
  [SignUpFormKey.Email]: FormControl<string>;
  [SignUpFormKey.Password]: FormControl<string>;
  [SignUpFormKey.UserName]: FormControl<string>;
}

export interface RegistrationErrorState {
  [SignUpFormKey.Email]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.email]: string;
  };
  [SignUpFormKey.Password]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.password]: string;
    [ValidatorKeys.minlength]: string;
  };
  [SignUpFormKey.UserName]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.minlength]: string;
  };
}
