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
} from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: 'checkbox.component.html',
  styleUrl: 'checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, LabelComponent, NgIf],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() id!: string;
  @Input() label = '';

  ngControl: NgControl | undefined;
  disabled = false;
  value = false;

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
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
