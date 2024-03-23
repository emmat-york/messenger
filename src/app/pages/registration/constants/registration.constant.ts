import { SignUpFormKey } from '../enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import {
  MIN_PASSWORD_LENGTH,
  VALIDATION_MESSAGES,
} from '../../../shared/constants/form.constant';
import { RegistrationErrorState } from '../interfaces/registration.interface';

export const REGISTRATION_ERROR_STATE: RegistrationErrorState = {
  [SignUpFormKey.Email]: {
    [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
    [ValidatorKeys.email]: VALIDATION_MESSAGES[ValidatorKeys.email],
  },
  [SignUpFormKey.Password]: {
    [ValidatorKeys.required]: VALIDATION_MESSAGES[ValidatorKeys.required],
    [ValidatorKeys.password]: VALIDATION_MESSAGES[ValidatorKeys.password],
    [ValidatorKeys.minlength]:
      VALIDATION_MESSAGES[ValidatorKeys.minlength](MIN_PASSWORD_LENGTH),
  },
};

export const REGISTRATION_LABELS = {
  [SignUpFormKey.Email]: 'Email:',
  [SignUpFormKey.Password]: 'Password:',
};
