import { selectUserVM, UserState } from './user.feature';
import { Injectable } from '@angular/core';
import { UserData } from './user.interface';
import * as action from './user.action';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  readonly vm$: Observable<UserState> = this.store.select(selectUserVM);

  constructor(private readonly store: Store) {}

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
