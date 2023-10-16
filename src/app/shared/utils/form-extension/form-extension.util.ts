import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DestroyRef, inject } from '@angular/core';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import { ControlStateClasses, ErrorState } from './interfaces/form-extension.interfaces';
import { TranslateService } from '@ngx-translate/core';

export class FormExtension<FormKeys extends string> {
  protected formGroup!: FormGroup;
  protected errorState!: ErrorState<FormKeys>;
  protected translate = inject(TranslateService);
  protected formBuilder = inject(FormBuilder);
  protected destroyRef = inject(DestroyRef);

  protected get isSubmittable(): boolean {
    return this.formGroup.valid || this.formGroup.enabled;
  }

  protected getControl(controlName: FormKeys): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  protected hasError(controlName: FormKeys): boolean {
    const control = this.getControl(controlName);
    return control.touched && control.invalid;
  }

  protected getStateClasses(controlName: FormKeys): ControlStateClasses | null {
    const control = this.getControl(controlName);

    if (!control.touched) {
      return null;
    }

    return control.valid ? 'valid' : 'invalid';
  }

  protected getErrorMessage(controlName: FormKeys): string | null {
    const control = this.getControl(controlName);

    if (control.valid) {
      return null;
    }

    const errorKey = Object.keys(control.errors || {})[0] as ValidatorKeys;
    return this.errorState[controlName][errorKey] || 'Unknown error';
  }
}
