import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<Event>();

  @HostListener('window:mousedown', ['$event'])
  handleWindowClicks(event: Event): void {
    if (!this.isClickInside(event.target as HTMLElement)) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.clickOutside.emit(event);
    }
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  private isClickInside(clickedElement: HTMLElement): boolean {
    return (
      clickedElement === this.elementRef.nativeElement ||
      this.elementRef.nativeElement.contains(clickedElement)
    );
  }
}
