import { Pipe, PipeTransform, QueryList, TemplateRef } from '@angular/core';
import { TabConfig } from '../tabs.component';
import { TabHeaderDirective } from '../directives/tab-header.directive';

@Pipe({
  name: 'tabHeader',
  standalone: true,
})
export class TabHeaderPipe implements PipeTransform {
  transform(
    content: QueryList<TabHeaderDirective>,
    tab: TabConfig | undefined,
  ): TemplateRef<HTMLElement> | undefined {
    return content.find(c => c.key === tab?.key)?.templateRef;
  }
}
