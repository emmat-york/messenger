import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DEFAULT_INDEX } from './constants/dropdown.constant';
import { NgForOf, NgIf } from '@angular/common';
import { ClickOutsideDirective } from '../../../directives/click-outside/click-outside.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from './interfaces/dropdown.interface';
import { Icon } from '../../../enums/icons.enum';
import { IconPipe } from '../../../pipes/icon/icon.pipe';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [NgIf, NgForOf, ClickOutsideDirective, IconPipe, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements ControlValueAccessor, OnInit {
  @Input() options: Option[] = [];

  selectedOption!: Option;
  selectedValue = '';
  isDropdownShown = false;
  disabled = false;
  icon = Icon;

  onChange(value: string): void {}
  onBlur(): void {}

  ngOnInit(): void {
    this.selectedValue = this.options[DEFAULT_INDEX].title;
  }

  onDropdownClick(): void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  onClickOutSide(): void {
    this.isDropdownShown = false;
  }

  onOptionClick({ value, title }: Option): void {
    this.onChange(value);
    this.selectedValue = title;
    this.isDropdownShown = false;
  }

  onDropdownBlur(): void {
    this.onBlur();
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

    if (this.isOptionString(value)) {
      const selectedOption = this.options.find(option => option.value === value);

      if (!selectedOption) {
        throw new Error('There is no option with this value.');
      }

      this.selectedOption = selectedOption;
      this.selectedValue = this.selectedOption.title;

      return;
    }

    this.selectedValue = value.title;
    this.selectedOption = value;
  }

  private isOptionString(value: string | Option): value is string {
    return typeof value === 'string';
  }
}
