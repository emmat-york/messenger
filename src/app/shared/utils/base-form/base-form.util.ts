import { FormBuilder, FormGroup } from '@angular/forms';
import { DestroyRef, inject } from '@angular/core';

export class BaseForm {
  protected formGroup!: FormGroup;
  protected formBuilder = inject(FormBuilder);
  protected destroyRef = inject(DestroyRef);
}
