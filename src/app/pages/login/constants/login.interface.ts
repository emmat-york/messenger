import { SignUpFormKey } from '../../registration/enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import { MIN_PASSWORD_LENGTH } from '../../../shared/constants/form.constant';
import { LoginErrorState } from '../interfaces/login.interface';

export const LOGIN_ERROR_STATE: LoginErrorState = {
  [SignUpFormKey.Email]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.email]: 'Email should be valid',
  },
  [SignUpFormKey.Password]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.minlength]: `Password min length should be ${MIN_PASSWORD_LENGTH} symbols`,
  },
};

export const LOGIN_LABELS = {
  [SignUpFormKey.Email]: 'Email:',
  [SignUpFormKey.Password]: 'Password:',
};
