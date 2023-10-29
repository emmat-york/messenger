import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { UserState } from '../../../store/reducers/user.reducer';
import * as selectors from '../../../store/selectors/user.selectors';
import * as actions from '../../../store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  contacts$ = this.store.select(selectors.contacts);

  constructor(private store: Store) {}

  setUserState(userState: UserState): void {
    this.dispatch(actions.setUser({ userState }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
