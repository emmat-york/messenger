import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactsComponent, ChatComponent],
})
export class MessengerComponent {}
