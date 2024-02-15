import { selectUserVM } from './user.feature';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { UserData } from './user.interface';
import * as action from './user.action';

@Injectable()
export class UserFacade {
  userVM$ = this.store.select(selectUserVM);

  constructor(private readonly store: Store) {}

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  setSelectedUserId(selectedUserId: number | null): void {
    this.dispatch(action.setSelectedUserId({ selectedUserId }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
