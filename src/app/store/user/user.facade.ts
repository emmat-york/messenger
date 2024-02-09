import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { selectUserData } from './user.feature';
import * as action from './user.action';

@Injectable()
export class UserFacade {
  userData$ = this.store.select(selectUserData);

  constructor(private readonly store: Store) {}

  setUserData(userData: object | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
