import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import { ERROR_MESSAGES } from '../../constants/error-messages.constants';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import { ControlStateClasses } from './interfaces/form-group-extension.interfaces';

export class FormGroupExtension<FormKey extends string, ErrorState> {
  protected formGroup!: FormGroup;
  protected errorState!: ErrorState;
  protected formBuilder = inject(FormBuilder);

  protected getControl(name: FormKey): AbstractControl {
    return this.formGroup.controls[name];
  }

  protected hasError(name: FormKey): boolean {
    return this.getControl(name).touched && !!this.getControl(name).errors;
  }

  protected getControlStateClasses(name: FormKey): ControlStateClasses | null {
    if (!this.getControl(name).touched) {
      return null;
    }

    return this.getControl(name).errors ? 'invalid' : 'valid';
  }

  protected getErrorMessage(name: FormKey): string | null {
    const errors = this.getControl(name).errors;

    if (errors) {
      const errorKey = Object.keys(errors)[0] as ValidatorKeys;
      return ERROR_MESSAGES[errorKey];
    }

    return null;
  }
}
