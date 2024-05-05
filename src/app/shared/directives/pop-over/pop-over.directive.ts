import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[popOver]',
  standalone: true,
})
export class PopOverDirective implements AfterViewInit {
  @Input() popOver!: string;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.setPopOverAttributes();
  }

  private setPopOverAttributes(): void {
    this.renderer2.setAttribute(this.el.nativeElement, 'id', this.popOver);
    this.renderer2.setAttribute(this.el.nativeElement, 'popover', '');
  }
}
