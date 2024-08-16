import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { KeyboardKey, MaxLengthKeyboardKey } from '../enums/chat-input.enum';

@Directive({
  selector: '[appContenteditable]',
  standalone: true,
})
export class ContentEditableFormDirective implements ControlValueAccessor {
  @Input() isMaxLengthReached = false;

  @Output() sendMessage = new EventEmitter<KeyboardEvent>();

  @HostBinding('attr.contenteditable') contenteditable = true;

  private readonly listOfAllowedKeyboardKeys = Object.values(MaxLengthKeyboardKey);
  private readonly ngControl = inject(NgControl, { optional: true });

  private onChange: (value: string) => void;
  private onTouched: () => void;

  constructor(
    private readonly elementRef: ElementRef<HTMLDivElement>,
    private readonly renderer2: Renderer2,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): void {
    if (event.key === KeyboardKey.Enter) {
      event.preventDefault();
      this.sendMessage.emit(event);
      return;
    }

    if (this.isMaxLengthReached && this.isAllowedKeyHasntBeenPressed(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('input') onInput(): void {
    this.onChange(this.elementRef.nativeElement.textContent ?? '');
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.renderer2.setProperty(this.elementRef.nativeElement, 'textContent', value ?? '');
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  private isAllowedKeyHasntBeenPressed(pressedKey: string): boolean {
    return !this.listOfAllowedKeyboardKeys.some(key => key === pressedKey);
  }
}
