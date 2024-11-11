import { Injectable } from '@angular/core';
import * as actions from './auth.action';
import { selectErrorMsg } from './auth.feature';
import { Action, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  readonly errorMsg$ = this.store.select(selectErrorMsg);

  constructor(private readonly store: Store) {}

  setIsAuth(isAuth: boolean): void {
    this.dispatch(actions.setIsAuth({ isAuth }));
  }

  setErrorMsg(errorMsg: string): void {
    this.dispatch(actions.setErrorMsg({ errorMsg }));
  }

  logOut(): void {
    this.dispatch(actions.logOut());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
