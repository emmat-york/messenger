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

  private onChange: (value: string) => void;
  private onTouched: () => void;

  readonly ngControl = inject(NgControl, { optional: true });

  private readonly listOfAllowedKeyboardKeys = Object.values(MaxLengthKeyboardKey);
  private readonly nativeElement: HTMLElement;

  constructor(
    private readonly elementRef: ElementRef<HTMLDivElement>,
    private readonly renderer2: Renderer2,
  ) {
    this.nativeElement = this.elementRef.nativeElement;
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
    this.onChange(this.nativeElement.innerText);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.renderer2.setProperty(this.nativeElement, 'innerText', value || '');
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
