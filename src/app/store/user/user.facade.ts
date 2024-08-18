import { selectUserVM, UserState } from './user.feature';
import { Injectable } from '@angular/core';
import { UserData } from './user.interface';
import * as action from './user.action';
import { BaseStoreFacade } from '../utils/base-store-facade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFacade extends BaseStoreFacade {
  readonly vm$: Observable<UserState> = this.store.select(selectUserVM);

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }
}
