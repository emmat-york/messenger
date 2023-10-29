import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AuthCredentials } from '../../interfaces/auth.interfaces';
import * as selectors from '../../../store/selectors/auth.selectors';
import * as actions from '../../../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  errorMessage$ = this.store.select(selectors.errorMessage);
  isAuth$ = this.store.select(selectors.isAuth);

  constructor(private store: Store) {}

  signUp(credentials: AuthCredentials): void {
    this.dispatch(actions.signInRequest({ credentials }));
  }

  signIn(credentials: AuthCredentials): void {
    this.dispatch(actions.signInRequest({ credentials }));
  }

  signOut(): void {}

  setErrorMessage(errorMessage: string | null): void {
    this.dispatch(actions.setErrorMessage({ errorMessage }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
