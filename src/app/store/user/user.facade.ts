import {
  selectContacts,
  selectDialogs,
  selectEssentialData,
  UserStoreState,
} from './user.feature';
import { Injectable } from '@angular/core';
import * as action from './user.action';
import { Message } from '../../pages/messenger/chat/chat.interface';
import { BaseStoreExtension } from '../base-store-extension';
import { Observable } from 'rxjs';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

@Injectable({
  providedIn: 'root',
})
export class UserFacade extends BaseStoreExtension {
  readonly essentialData$: Observable<EssentialUserData | null> =
    this.store.select(selectEssentialData);
  readonly dialogs$: Observable<Dialog[]> = this.store.select(selectDialogs);
  readonly contacts$: Observable<EssentialUserData[]> = this.store.select(selectContacts);

  setUser(payload: UserStoreState): void {
    this.dispatch(action.setUser({ payload }));
  }

  updateDialogLastMessage(message: Message): void {
    this.dispatch(action.updateDialogLastMessage({ message }));
  }

  addContact(contact: EssentialUserData): void {
    this.dispatch(action.addContact({ contact }));
  }

  resetUserReducer(): void {
    this.dispatch(action.resetUserReducer());
  }
}
