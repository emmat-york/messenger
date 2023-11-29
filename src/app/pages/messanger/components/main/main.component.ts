import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HistoryComponent } from './components/history/history.component';
import { InputComponent } from './components/input/input.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { AsyncPipe, NgIf } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Contact } from './components/contacts/components/interfaces/contact.interface';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { NoSelectedContactComponent } from './components/no-selected-contact/no-selected-contact.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  imports: [
    ContactsComponent,
    HistoryComponent,
    InputComponent,
    AsyncPipe,
    NgIf,
    LetDirective,
    NoSelectedContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  inputText$ = this.chatFacade.inputText$;
  mainVM$ = this.userFacade.mainVM$;

  constructor(
    private userFacade: UserFacade,
    private chatFacade: ChatFacade,
  ) {}

  @HostListener('document:keydown.escape') onEscKeydown(): void {
    this.mainVM$.pipe(take(1)).subscribe(({ selectedContact }) => {
      if (!selectedContact) {
        return;
      }

      this.setSelectedContact(null);
    });
  }

  setSelectedContact(contact: Contact | null): void {
    this.userFacade.setSelectedContact(contact);
  }

  setInputText(text: string): void {
    this.chatFacade.setInputText(text);
  }

  sendMessage(): void {
    this.chatFacade.sendMessage();
  }
}
