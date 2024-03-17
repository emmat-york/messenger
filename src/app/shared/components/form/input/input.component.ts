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
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { LabelComponent } from '../label/label.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { InputType } from './interfaces/input.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  imports: [FormsModule, NgClass, LabelComponent, ErrorMessageComponent, NgIf],
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
  @Input() errorState: any = {};
  @Input() id!: string;
  @Input() classes!: string | string[] | Record<string, boolean> | null;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type: InputType = 'text';

  control!: FormControl<string>;
  disabled = false;
  value = '';

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    this.setCurrentControl();
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

  private setCurrentControl(): void {
    this.control = this.injector
      .get(FormGroupDirective)
      .getControl(this.injector.get(NgControl) as FormControlName);
  }
}
