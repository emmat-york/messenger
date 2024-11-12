import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  standalone: true,
  templateUrl: 'switcher.component.html',
  styleUrl: 'switcher.component.scss',
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() checkboxId = '';

  isDisabled = false;
  value = false;

  constructor(
    @Self() @Optional() readonly ngControl: NgControl,
    private readonly cdRef: ChangeDetectorRef,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private onChange(_: boolean): void {}
  private onTouched(): void {}

  onSwitcherChange(value: boolean): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: boolean | null | undefined): void {
    this.value = Boolean(value);
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
