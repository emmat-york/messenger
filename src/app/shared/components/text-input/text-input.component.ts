import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-text-input',
  standalone: true,
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss'],
  imports: [FormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() classes!: string | string[] | Record<string, boolean> | undefined;
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
