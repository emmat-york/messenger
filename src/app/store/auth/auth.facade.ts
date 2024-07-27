import { Injectable } from '@angular/core';
import { BaseStoreFacade } from '../utils/base-store-facade';
import * as actions from './auth.action';
import { selectErrorMsg, selectIsAuth } from './auth.feature';

@Injectable()
export class AuthFacade extends BaseStoreFacade {
  readonly isAuth$ = this.store.select(selectIsAuth);
  readonly errorMsg$ = this.store.select(selectErrorMsg);

  setIsAuth(isAuth: boolean): void {
    this.dispatch(actions.setIsAuth({ isAuth }));
  }

  setErrorMsg(errorMsg: string): void {
    this.store.dispatch(actions.setErrorMsg({ errorMsg }));
  }
}
