import { AbstractControl } from '@angular/forms';

export const getTrimmedString = (rawInput: string | null | undefined): string =>
  (rawInput || '').trim();

export const trim = (
  controlOrControls: AbstractControl<string> | AbstractControl<string>[],
  options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  },
): void => {
  if (Array.isArray(controlOrControls)) {
    controlOrControls.forEach(control => {
      control.setValue(getTrimmedString(control.value), options);
    });

    return;
  }

  controlOrControls.setValue(getTrimmedString(controlOrControls.value), options);
};
