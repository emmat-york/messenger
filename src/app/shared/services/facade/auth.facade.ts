import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AuthCredentials } from '../../interfaces/auth.interfaces';
import * as selectors from '../../../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  isAuth$ = this.store.select(selectors.isAuth);

  constructor(private store: Store) {}

  signUp(credentials: AuthCredentials): void {
    console.log(credentials);
  }

  signIn(credentials: AuthCredentials): void {
    console.log(credentials);
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
