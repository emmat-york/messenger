import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: 'checkbox.component.html',
  styleUrl: 'checkbox.component.scss',
  imports: [FormsModule, LabelComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() id = '';

  disabled = false;
  value = false;

  constructor(@Self() @Optional() readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  onChange(_: boolean): void {}
  onBlur(): void {}

  onInputChange(value: boolean): void {
    this.value = value;
    this.onChange(value);
  }

  onInputBlur(): void {
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
