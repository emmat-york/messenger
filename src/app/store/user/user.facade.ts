import { selectUserVM } from './user.feature';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Contact, UserData } from './user.interface';
import * as action from './user.action';

@Injectable()
export class UserFacade {
  userVM$ = this.store.select(selectUserVM);

  constructor(private readonly store: Store) {}

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  setSelectedContact(selectedContact: Contact | null): void {
    this.dispatch(action.setSelectedContact({ selectedContact }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
