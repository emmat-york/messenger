import { ValidatorKeys } from '../enums/validator-keys.enum';

export const MIN_PASSWORD_LENGTH = 12;

export const SLEEPY_OPTIONS = {
  onlySelf: true,
  emitEvent: false,
};

export const VALIDATION_MESSAGES = {
  [ValidatorKeys.required]: 'Field is required',
  [ValidatorKeys.email]: 'Email should be valid',
  [ValidatorKeys.password]:
    'Password should contains uppercase, lowercase, number and special symbols',
  [ValidatorKeys.minlength]: (length: number) =>
    `Password min length should be ${length} symbols`,
};
