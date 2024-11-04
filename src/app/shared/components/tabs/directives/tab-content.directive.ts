import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appTabContent]',
  standalone: true,
})
export class TabContentDirective {
  @Input('appTabContent') key: string;

  constructor(public readonly templateRef: TemplateRef<HTMLElement>) {}
}
