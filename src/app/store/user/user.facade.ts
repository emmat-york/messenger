import { DestroyRef, Inject, Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interface';
import { UserData } from '../../pages/messanger/components/main/interfaces/main.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Languages } from '../../shared/enums/languages.enum';
import { combineLatest, map, Observable } from 'rxjs';
import * as selectors from './user.selectors';
import * as actions from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  mainVM$: Observable<{
    selectedContact: Contact | null;
    contacts: Contact[];
  }> = combineLatest([
    this.store.select(selectors.selectedContact),
    this.store.select(selectors.contacts),
  ]).pipe(
    map(([selectedContact, contacts]) => ({
      selectedContact,
      contacts,
    })),
    takeUntilDestroyed(this.destroyRef),
  );

  constructor(
    @Inject(DestroyRef) private destroyRef: DestroyRef,
    private store: Store,
  ) {}

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
