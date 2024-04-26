import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import { FormControl } from '@angular/forms';
import { LoginFormKey } from '../enums/login.enum';

export interface LoginFormGroup {
  [LoginFormKey.Email]: FormControl<string>;
  [LoginFormKey.Password]: FormControl<string>;
  [LoginFormKey.RememberMe]: FormControl<boolean>;
}

export interface LoginErrorState {
  [LoginFormKey.Email]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.email]: string;
  };
  [LoginFormKey.Password]: {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.minlength]: string;
  };
}
