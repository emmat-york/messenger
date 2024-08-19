import { ChangeDetectionStrategy, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: 'checkbox.component.html',
  styleUrl: 'checkbox.component.scss',
  imports: [FormsModule, LabelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() checkboxId = '';

  disabled = false;
  value = false;

  constructor(@Self() @Optional() readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  private onChange(_: boolean): void {}

  private onBlur(): void {}

  onInputChange(value: boolean): void {
    this.value = value;
    this.onChange(value);
    this.onBlur();
  }

  writeValue(value: boolean | null | undefined): void {
    this.value = !!value;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
}
