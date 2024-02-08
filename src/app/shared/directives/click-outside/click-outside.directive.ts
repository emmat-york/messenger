import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
    standalone: true,
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

    constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

    private isClickInside(clickedElement: HTMLElement): boolean {
        return (
            clickedElement === this.elementRef.nativeElement ||
            this.elementRef.nativeElement.contains(clickedElement)
        );
    }
}
