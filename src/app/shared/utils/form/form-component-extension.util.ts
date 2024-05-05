import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';

export class FormComponentExtension<
  K extends string,
  T extends { [key: string]: AbstractControl<any, any> },
> {
  protected formGroup!: FormGroup<T>;
  protected readonly fb = inject(FormBuilder).nonNullable;

  protected control(key: K): AbstractControl<T[K]> | null {
    return this.formGroup.get(key);
  }
}
