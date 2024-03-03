import { FormControl } from '@angular/forms';
import { RegistrationFormKey } from '../enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';

export interface RegistrationFormGroup {
  [RegistrationFormKey.Email]: FormControl<string>;
  [RegistrationFormKey.Password]: FormControl<string>;
  [RegistrationFormKey.UserName]: FormControl<string>;
}

export interface RegistrationErrorState {
  [RegistrationFormKey.Email]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.email]: string;
  };
  [RegistrationFormKey.Password]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.password]: string;
    [ValidatorKeys.minlength]: string;
  };
  [RegistrationFormKey.UserName]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.minlength]: string;
  };
}
