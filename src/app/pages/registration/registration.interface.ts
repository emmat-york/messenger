import { SignUpFormKey } from './registration.enum';
import { ValidatorKeys } from '../../shared/enums/validator-keys.enum';

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
}
