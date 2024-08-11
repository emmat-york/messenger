import { selectUserVM, UserState } from './user.feature';
import { Injectable } from '@angular/core';
import { Dialog, UserData } from './user.interface';
import * as action from './user.action';
import { BaseStoreFacade } from '../utils/base-store-facade';
import { Observable } from 'rxjs';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class UserFacade extends BaseStoreFacade {
  readonly vm$: Observable<UserState> = this.store.select(selectUserVM);

  setUserData(userData: UserData | null): void {
    this.dispatch(action.setUserData({ userData }));
  }

  setSelectedDialog(selectedDialog: Dialog | null): void {
    this.dispatch(action.setSelectedDialog({ selectedDialog }));
  }

  updateLastMessage(message: Message, roomId: string): void {
    this.dispatch(action.updateLastMessage({ message, roomId }));
  }
}
