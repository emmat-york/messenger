import { SignUpFormKey } from '../enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import {
  MIN_PASSWORD_LENGTH,
  MIN_USER_NAME_LENGTH,
} from '../../../shared/constants/form.constant';
import { RegistrationErrorState } from '../interfaces/registration.interface';

export const REGISTRATION_ERROR_STATE: RegistrationErrorState = {
  [SignUpFormKey.Email]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.email]: 'Email should be valid',
  },
  [SignUpFormKey.Password]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.password]: 'Password should contain...',
    [ValidatorKeys.minlength]: `Password min length should be ${MIN_PASSWORD_LENGTH} symbols`,
  },
  [SignUpFormKey.UserName]: {
    [ValidatorKeys.required]: 'This field is required',
    [ValidatorKeys.minlength]: `User name min length should be ${MIN_USER_NAME_LENGTH} symbols`,
  },
};

export const REGISTRATION_LABELS = {
  [SignUpFormKey.Email]: 'Email:',
  [SignUpFormKey.Password]: 'Password:',
  [SignUpFormKey.UserName]: 'User name:',
};
