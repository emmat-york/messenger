import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HistoryComponent } from './components/history/history.component';
import { InputComponent } from './components/input/input.component';
import { UserFacade } from '../../../../shared/services/facade/user.facade';
import { AsyncPipe, NgIf } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Contact } from './components/contacts/components/interfaces/contact.interfaces';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  mainVM$ = this.userFacade.mainVM$;

  constructor(private userFacade: UserFacade) {}

  setSelectedContact(contact: Contact): void {
    this.userFacade.setSelectedContact(contact);
  }
}
