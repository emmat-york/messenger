import { Pipe, PipeTransform, QueryList, TemplateRef } from '@angular/core';
import { TabContentDirective } from '../directives/tab-content.directive';
import { TabConfig } from '../tabs.component';

@Pipe({
  name: 'tabContent',
  standalone: true,
})
export class TabContentPipe implements PipeTransform {
  transform(
    content: QueryList<TabContentDirective>,
    selectedTab: TabConfig | undefined,
  ): TemplateRef<HTMLElement> | undefined {
    return content.find(c => c.key === selectedTab?.key)?.templateRef;
  }
}
