import {ValidatorKeys} from "../enums/validator-keys.enum";

export interface ValidationMessages {
    [ValidatorKeys.required]: string;
    [ValidatorKeys.email]: string;
    [ValidatorKeys.password]: string;
    [ValidatorKeys.minlength]: (length: number) => string;
}
