import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TabConfig,
  TabsComponent,
} from '../../../../shared/components/tabs/tabs.component';
import { TabContentDirective } from '../../../../shared/components/tabs/directives/tab-content.directive';
import { Dialog } from '../../../../shared/services/api/chat/chat-service.interface';
import { ContactsSearchBarComponent } from './contacts-search-bar/contacts-search-bar.component';
import { ChatsSearchBarComponent } from './chats-search-bar/chats-search-bar.component';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  templateUrl: 'search-panel.component.html',
  styleUrl: 'search-panel.component.scss',
  imports: [
    ContactsSearchBarComponent,
    ChatsSearchBarComponent,
    TabContentDirective,
    TabsComponent,
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
    },
    {
      key: 'contacts',
      text: 'Contacts',
    },
  ];
}
