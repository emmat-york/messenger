import { Injectable } from '@angular/core';
import * as actions from './auth.action';
import { selectErrorMsg } from './auth.feature';
import { BaseStoreExtension } from '../base-store-extension';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade extends BaseStoreExtension {
  readonly errorMsg$ = this.store.select(selectErrorMsg);

  setIsAuth(isAuth: boolean): void {
    this.dispatch(actions.setIsAuth({ isAuth }));
  }

  setErrorMsg(errorMsg: string): void {
    this.dispatch(actions.setErrorMsg({ errorMsg }));
  }

  logOut(): void {
    this.dispatch(actions.logOut());
  }

  resetAuthReducer(): void {
    this.dispatch(actions.resetAuthReducer());
  }
}
