import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('window:click', ['$event.target'])
  handleWindowClicks(clickedElement: HTMLElement): void {
    const isOutsideClick = !this.isClickInside(clickedElement);

    if (isOutsideClick) {
      this.clickOutside.emit();
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  private isClickInside(clickedElement: HTMLElement): boolean {
    return (
      clickedElement === this.elementRef.nativeElement ||
      this.elementRef.nativeElement.contains(clickedElement)
    );
  }
}
