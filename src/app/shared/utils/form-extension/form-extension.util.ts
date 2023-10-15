import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import { ERROR_MESSAGES } from '../../constants/error-messages.constants';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import {
  ControlStateClasses,
  ErrorState,
} from './interfaces/form-extension.interfaces';

export class FormExtension<FormKeys extends string> {
  protected formGroup!: FormGroup;
  protected errorState!: ErrorState<FormKeys>;
  protected formBuilder = inject(FormBuilder);

  protected get isSubmittable(): boolean {
    return this.formGroup.valid || this.formGroup.enabled;
  }

  protected getControl(name: FormKeys): AbstractControl {
    return this.formGroup.controls[name];
  }

  protected hasError(name: FormKeys): boolean {
    const control = this.getControl(name);
    return control.touched && control.invalid;
  }

  protected getControlStateClasses(name: FormKeys): ControlStateClasses | null {
    const control = this.getControl(name);

    if (!control.touched) {
      return null;
    }

    return control.valid ? 'valid' : 'invalid';
  }

  protected getErrorMessage(name: FormKeys): string | null {
    const errors = this.getControl(name).errors;

    if (errors) {
      const errorKey = Object.keys(errors)[0] as ValidatorKeys;
      return ERROR_MESSAGES[errorKey];
    }

    return null;
  }
}
