import { ValidatorKeys } from '../enums/validator-keys.enum';

export const ERROR_MESSAGES: Record<ValidatorKeys, string> = {
  [ValidatorKeys.required]: 'This field is required',
  [ValidatorKeys.minlength]: 'Min length must be greater then 10',
};
