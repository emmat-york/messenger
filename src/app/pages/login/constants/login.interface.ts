import { LoginFormKey } from '../enums/login.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import { LoginErrorState } from '../interfaces/login.interface';
import { MIN_PASSWORD_LENGTH } from '../../../shared/constants/form.constant';

export const LOGIN_ERROR_STATE: LoginErrorState = {
  [LoginFormKey.Email]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.email]: 'Email should be valid',
  },
  [LoginFormKey.Password]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.minlength]: `Password min length should be ${MIN_PASSWORD_LENGTH} symbols`,
  },
};

export const LOGIN_LABELS = {
  [LoginFormKey.Email]: 'Email:',
  [LoginFormKey.Password]: 'Password:',
};
