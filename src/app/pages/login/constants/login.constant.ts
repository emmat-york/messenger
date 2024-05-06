import { LoginFormKey } from '../enums/login.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import { LoginErrorState } from '../interfaces/login.interface';
import {
  MIN_PASSWORD_LENGTH,
  VALIDATION_MESSAGES,
} from '../../../shared/constants/form.constant';

export const LOGIN_ERROR_STATE: LoginErrorState = {
  [LoginFormKey.Email]: {
    [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
    [ValidatorKeys.email]: VALIDATION_MESSAGES[ValidatorKeys.email],
  },
  [LoginFormKey.Password]: {
    [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
    [ValidatorKeys.minlength]:
      VALIDATION_MESSAGES[ValidatorKeys.minlength](MIN_PASSWORD_LENGTH),
  },
};

export const LOGIN_PLACEHOLDERS = {
  [LoginFormKey.Email]: 'Email',
  [LoginFormKey.Password]: 'Password',
};
