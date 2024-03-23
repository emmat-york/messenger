import {ValidatorKeys} from "../enums/validator-keys.enum";
import {ValidationMessages} from "../interfaces/form.interface";

export const MIN_PASSWORD_LENGTH = 12;

export const SLEEPY_OPTIONS = {
  onlySelf: true,
  emitEvent: false,
};

export const VALIDATION_MESSAGES: ValidationMessages = {
  [ValidatorKeys.required]: 'This field is required',
  [ValidatorKeys.email]: 'Email should be valid',
  [ValidatorKeys.password]: 'Password should contains uppercase, lowercase, number and special symbol',
  [ValidatorKeys.minlength]: (length: number) => `Password min length should be ${length} symbols`,
};
