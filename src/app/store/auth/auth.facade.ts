import { Injectable } from '@angular/core';
import { BaseStoreFacade } from '../utils/base-store-facade';
import { setIsAuth } from './auth.action';
import { selectIsAuth } from './auth.feature';

@Injectable()
export class AuthFacade extends BaseStoreFacade {
  readonly isAuth$ = this.store.select(selectIsAuth);

  setIsAuth(isAuth: boolean): void {
    this.dispatch(setIsAuth({ isAuth }));
  }
}
