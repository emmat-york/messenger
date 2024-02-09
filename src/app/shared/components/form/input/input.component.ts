import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  imports: [FormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() classes!: string | string[] | Record<string, boolean> | null;
  @Input() placeholder = '';

  value = '';
  disabled = false;

  onChange(value: string): void {}
  onBlur(): void {}

  onInputChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  onInputBlur(): void {
    this.onBlur();
  }

  writeValue(value: string | null): void {
    this.value = value || '';
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
}
