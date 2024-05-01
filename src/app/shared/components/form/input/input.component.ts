import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { LabelComponent } from '../label/label.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { IconPipe } from '../../../pipes/icon/icon.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  imports: [
    ErrorMessageComponent,
    NgOptimizedImage,
    LabelComponent,
    FormsModule,
    IconPipe,
    NgClass,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() errorState: ValidationErrors = {};
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() id = '';

  disabled = false;
  value = '';

  constructor(@Self() @Optional() readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  onChange(_: string): void {}
  onBlur(): void {}

  onInputChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  onInputBlur(): void {
    this.onBlur();
  }

  writeValue(value: string | null | undefined): void {
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
