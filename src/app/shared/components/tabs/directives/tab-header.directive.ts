import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appTabHeader]',
  standalone: true,
})
export class TabHeaderDirective {
  @Input('appTabHeader') key: string;

  constructor(public readonly templateRef: TemplateRef<HTMLElement>) {}
}
