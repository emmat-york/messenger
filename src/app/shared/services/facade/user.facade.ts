import { DestroyRef, Inject, Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Contact } from '../../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';
import { UserData } from '../../../pages/messanger/components/main/interfaces/main.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, map, Observable } from 'rxjs';
import * as selectors from '../../../store/selectors/user.selectors';
import * as actions from '../../../store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  mainVM$: Observable<{
    selectedContact: Contact | null;
    contacts: Contact[] | null;
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

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
