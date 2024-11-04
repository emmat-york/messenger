import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { TabContentDirective } from './directives/tab-content.directive';
import { TabHeaderDirective } from './directives/tab-header.directive';
import { TabContentPipe } from './pipes/tab-content.pipe';
import { TabHeaderPipe } from './pipes/tab-header.pipe';

export interface TabConfig {
  key: string;
  text: string;
  description?: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: 'tabs.component.html',
  styleUrl: 'tabs.component.scss',
  imports: [NgForOf, NgTemplateOutlet, TabContentPipe, NgIf, TabHeaderPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  @Input() config: TabConfig[] = [];
  @Input() selectedTab?: TabConfig;

  @ContentChildren(TabHeaderDirective)
  readonly headerContentRefs: QueryList<TabHeaderDirective>;
  @ContentChildren(TabContentDirective)
  readonly tabContentRefs: QueryList<TabContentDirective>;

  ngOnInit(): void {
    if (!this.selectedTab) {
      this.setSelectedTab(this.config[0]);
    }
  }

  setSelectedTab(tab: TabConfig): void {
    this.selectedTab = tab;
  }
}
