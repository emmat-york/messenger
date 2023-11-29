import { ValidatorKeys } from '../../../enums/validator-keys.enum';

export type ControlStateClasses = 'valid' | 'invalid';

export type ErrorState<FormKeys extends string> = Record<FormKeys, ControlErrors>;

export type ControlErrors = Partial<Record<ValidatorKeys, string>>;
