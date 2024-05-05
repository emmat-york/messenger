import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import { LoginFormKey } from '../enums/login.enum';

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
