import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserFacade } from '../../store/user/user.facade';
import { take } from 'rxjs';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactsComponent, ChatComponent],
})
export class MessengerComponent {
  constructor(private readonly userFacade: UserFacade) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    this.userFacade.userVM$.pipe(take(1)).subscribe(({ selectedContact }) => {
      if (!selectedContact) {
        return;
      }

      this.userFacade.setSelectedContact(null);
    });
  }
}
