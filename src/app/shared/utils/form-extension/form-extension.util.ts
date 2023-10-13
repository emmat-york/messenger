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

  protected getControl(name: FormKeys): AbstractControl {
    return this.formGroup.controls[name];
  }

  protected hasError(name: FormKeys): boolean {
    return this.getControl(name).touched && !!this.getControl(name).errors;
  }

  protected getControlStateClasses(name: FormKeys): ControlStateClasses | null {
    if (!this.getControl(name).touched) {
      return null;
    }

    return this.getControl(name).errors ? 'invalid' : 'valid';
  }

  protected getErrorMessage(name: FormKeys): string | null {
    const errors = this.getControl(name).errors;

    if (errors) {
      const errorKey = Object.keys(errors)[0] as ValidatorKeys;
      return ERROR_MESSAGES[errorKey];
    }

    return null;
  }

  protected isSubmittable(): boolean {
    return this.formGroup.valid || this.formGroup.enabled;
  }
}
