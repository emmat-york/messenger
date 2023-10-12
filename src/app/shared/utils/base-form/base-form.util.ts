import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DestroyRef, inject } from '@angular/core';
import { ControlStateClasses } from './interfaces/base-form.interfaces';
import { ERROR_MESSAGES } from '../../constants/error-messages.constants';
import { ValidatorKeys } from '../../enums/validator-keys.enum';

export class BaseForm<FormKey extends string> {
  protected formGroup!: FormGroup;
  protected formBuilder = inject(FormBuilder);
  protected destroyRef = inject(DestroyRef);

  protected getControl(name: FormKey): AbstractControl {
    return this.formGroup.controls[name];
  }

  protected hasError(name: FormKey): boolean {
    return this.getControl(name).touched && !!this.getControl(name).errors;
  }

  protected isControlDisabled(name: FormKey): boolean {
    return this.getControl(name).disabled;
  }

  protected getControlStateClasses(name: FormKey): ControlStateClasses {
    return this.hasError(name) ? 'invalid' : 'valid';
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
