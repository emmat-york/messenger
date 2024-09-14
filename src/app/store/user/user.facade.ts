import { selectUserState, UserStoreState } from './user.feature';
import { Injectable } from '@angular/core';
import * as action from './user.action';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  readonly vm$: Observable<UserStoreState> = this.store.select(selectUserState);

  constructor(private readonly store: Store) {}

  setUser(payload: UserStoreState): void {
    this.dispatch(action.setUser({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
