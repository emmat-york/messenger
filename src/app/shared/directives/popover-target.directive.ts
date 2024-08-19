import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[popoverTarget]',
  standalone: true,
})
export class PopoverTargetDirective implements OnInit {
  @Input() popoverTarget!: string;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer2: Renderer2,
  ) {}

  ngOnInit(): void {
    this.setPopoverTargetAttribute();
  }

  private setPopoverTargetAttribute(): void {
    this.renderer2.setAttribute(
      this.el.nativeElement,
      'popovertarget',
      this.popoverTarget,
    );
  }
}
