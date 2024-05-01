import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { LabelComponent } from '../label/label.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { IconPipe } from '../../../pipes/icon/icon.pipe';
import { InputType } from './interfaces/input.interface';

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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() errorState: ValidationErrors = {};
  @Input() type: InputType = 'text';
  @Input() placeholder = '';
  @Input() id!: string;
  @Input() label = '';

  ngControl!: NgControl;
  disabled = false;
  value = '';

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
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
