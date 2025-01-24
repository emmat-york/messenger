import { selectContacts, selectUserState, UserStoreState } from './user.feature';
import { Injectable } from '@angular/core';
import * as action from './user.action';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EssentialUserData } from '../../shared/services/api/chat/chat-service.interface';
import { Message } from '../../pages/messenger/chat/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  readonly vm$: Observable<UserStoreState> = this.store.select(selectUserState);
  readonly contacts$: Observable<EssentialUserData[]> = this.store.select(selectContacts);

  constructor(private readonly store: Store) {}

  setUser(payload: UserStoreState): void {
    this.dispatch(action.setUser({ payload }));
  }

  updateDialogLastMessage(message: Message): void {
    this.dispatch(action.updateDialogLastMessage({ message }));
  }

  resetUserReducer(): void {
    this.dispatch(action.resetUserReducer());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
