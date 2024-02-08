import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import { ValidatorKeys } from '../../enums/validator-keys.enum';
import { ControlStateClasses, ErrorState } from './interfaces/form-extension.interface';

export class FormExtension<FormKeys extends string> {
    protected formGroup!: FormGroup;
    protected errorState: ErrorState<FormKeys> | undefined;

    protected formBuilder = inject(FormBuilder);

    protected get isSubmittable(): boolean {
        return this.formGroup.valid && this.formGroup.enabled;
    }

    protected control(controlName: FormKeys): AbstractControl {
        return this.formGroup.controls[controlName];
    }

    protected isInvalid(controlName: FormKeys): boolean {
        const control = this.control(controlName);
        return control.touched && control.invalid;
    }

    protected getStateClasses(controlName: FormKeys): ControlStateClasses | null {
        const control = this.control(controlName);

        if (control.untouched) {
            return null;
        }

        return control.valid ? 'valid' : 'invalid';
    }

    protected getErrorMessage(controlName: FormKeys): string | null {
        if (!this.errorState) {
            throw new Error(
                "In order to use 'getErrorMessage' method you gotta set 'errorState' property!",
            );
        }

        const control = this.control(controlName);

        if (!control.errors) {
            return null;
        }

        const errorKey = Object.keys(control.errors)[0] as ValidatorKeys;
        return this.errorState[controlName][errorKey] || 'Unknown error';
    }
}
