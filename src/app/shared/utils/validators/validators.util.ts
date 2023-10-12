import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import { ERROR_MESSAGES } from '../../constants/error-messages.constants';

export abstract class CustomValidators {
  static email(): ValidatorFn {
    return ({ value }: AbstractControl): ValidationErrors | null => {
      if (value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
        return null;
      }

      return { [ValidatorKeys.email]: ERROR_MESSAGES[ValidatorKeys.email] };
    };
  }

  static password(): ValidatorFn {
    return ({ value }: AbstractControl): ValidationErrors | null => {
      const error = {
        [ValidatorKeys.password]: ERROR_MESSAGES[ValidatorKeys.password],
      };

      if (!value.match(/[0-9]/)) {
        return error;
      }

      if (!value.match(/[A-Z]/)) {
        return error;
      }

      if (!value.match(/[a-z]/)) {
        return error;
      }

      if (
        !value.match(
          /[~\`\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\|\;\:\"\<\>\,\.\?\/\\]/,
        )
      ) {
        return error;
      }

      return null;
    };
  }
}
