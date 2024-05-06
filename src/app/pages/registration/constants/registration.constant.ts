import { SignUpFormKey } from '../enums/registration.enum';
import { ValidatorKeys } from '../../../shared/enums/validator-keys.enum';
import {
  MIN_PASSWORD_LENGTH,
  VALIDATION_MESSAGES,
} from '../../../shared/constants/form.constant';
import { RegistrationErrorState } from '../interfaces/registration.interface';
import { Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/utils/validators/validators.util';

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

export const REGISTRATION_PLACEHOLDERS = {
  [SignUpFormKey.Email]: 'Email',
  [SignUpFormKey.Password]: 'Password',
};

export const REGISTRATION_VALIDATORS = {
  [SignUpFormKey.Email]: [Validators.required, CustomValidators.email()],
  [SignUpFormKey.Password]: [
    Validators.required,
    Validators.minLength(MIN_PASSWORD_LENGTH),
    CustomValidators.password(),
  ],
};
