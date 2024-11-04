import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TabConfig,
  TabsComponent,
} from '../../../../shared/components/tabs/tabs.component';
import { TabContentDirective } from '../../../../shared/components/tabs/directives/tab-content.directive';
import { Dialog } from '../../../../shared/services/api/chat/chat-service.interface';
import { NgForOf, NgIf } from '@angular/common';
import { DialogComponent } from '../dialogs/dialog/dialog.component';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter.pipe';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  templateUrl: 'search-panel.component.html',
  styleUrl: 'search-panel.component.scss',
  imports: [
    TabContentDirective,
    ArrayFilterPipe,
    DialogComponent,
    TabsComponent,
    NgForOf,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {
  @Input() searchRequest = '';
  @Input() dialogs: Dialog[] = [];

  readonly tabsConfig: TabConfig[] = [
    {
      key: 'chats',
      text: 'Chats',
      description: 'Find the chat you need',
    },
    {
      key: 'contacts',
      text: 'Contacts',
      description: 'Find the contact you need',
    },
  ];
}
