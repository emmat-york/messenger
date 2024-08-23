import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconPipe } from '../../pipes/icon.pipe';

export type DropdownOptionValue = string | number | boolean | null | undefined;

export interface Option {
  title: string;
  value: DropdownOptionValue;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    },
  ],
  imports: [ClickOutsideDirective, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements ControlValueAccessor, OnInit {
  @Input() options: Option[] = [];
  @Input() dropdownId = '';

  selectedOption: Option;
  selectedValueTitle = '';
  isDropdownShown = false;
  disabled = false;

  private onChange(_: DropdownOptionValue): void {}

  private onBlur(): void {}

  ngOnInit(): void {
    this.selectedValueTitle = this.options[0].title;
  }

  onDropdownClick(): void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  onClickOutSide(): void {
    this.isDropdownShown = false;
  }

  onOptionClick({ value, title }: Option): void {
    this.onChange(value);
    this.onBlur();
    this.selectedValueTitle = title;
    this.isDropdownShown = false;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string | Option): void {
    if (!value) {
      return;
    }

    if (typeof value === 'string') {
      const selectedOption = this.options.find(option => option.value === value);

      if (!selectedOption) {
        throw new Error('There is no option with this value.');
      }

      this.selectedOption = selectedOption;
      this.selectedValueTitle = this.selectedOption.title;

      return;
    }

    this.selectedValueTitle = value.title;
    this.selectedOption = value;
  }
}
