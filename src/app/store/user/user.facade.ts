import { selectUserVM } from './user.feature';
import { Injectable } from '@angular/core';
import { Contact, UserData } from './user.interface';
import * as action from './user.action';
import { BaseStoreFacade } from '../utils/base-store-facade';

@Injectable()
export class UserFacade extends BaseStoreFacade {
  readonly vm$ = this.store.select(selectUserVM);

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  setSelectedContact(selectedContact: Contact | null): void {
    this.dispatch(action.setSelectedContact({ selectedContact }));
  }
}
