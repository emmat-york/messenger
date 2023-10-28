import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DestroyRef, inject } from '@angular/core';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import { ControlStateClasses, ErrorState } from './interfaces/form-extension.interfaces';
import { TranslateService } from '@ngx-translate/core';
import { FIRST_ERROR_INDEX } from '../../constants/auth.constants';

export class FormExtension<FormKeys extends string> {
  protected formGroup!: FormGroup;
  protected errorState: ErrorState<FormKeys> | undefined;

  protected formBuilder = inject(FormBuilder);
  protected translate = inject(TranslateService);
  protected destroyRef = inject(DestroyRef);

  protected get isSubmittable(): boolean {
    return this.formGroup.valid && this.formGroup.enabled;
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

    if (control.untouched) {
      return null;
    }

    return control.valid ? 'valid' : 'invalid';
  }

  protected getErrorMessage(controlName: FormKeys): string | null {
    if (!this.errorState) {
      throw new Error(
        'In order to use getErrorMessage method you gotta set errorState property!',
      );
    }

    const control = this.getControl(controlName);

    if (!control.errors) {
      return null;
    }

    const errorKey = Object.keys(control.errors)[FIRST_ERROR_INDEX] as ValidatorKeys;
    return this.errorState[controlName][errorKey] || 'Unknown error';
  }
}
