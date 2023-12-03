import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interface';
import { UserData } from '../../pages/messanger/components/main/interfaces/main.interface';
import { Languages } from '../../shared/enums/languages.enum';
import * as selectors from './user.selectors';
import * as actions from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  userData$ = this.store.select(selectors.userData);
  selectedContact$ = this.store.select(selectors.selectedContact);

  constructor(private store: Store) {}

  setUserState(userData: UserData): void {
    this.dispatch(actions.setUser({ userData }));
  }

  setSelectedContact(contact: Contact | null): void {
    this.dispatch(actions.setSelectedContact({ contact }));
  }
  
  setLanguage(language: Languages): void {
    this.dispatch(actions.setLanguage({ language }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
