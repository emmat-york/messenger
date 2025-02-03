import { Injectable } from '@angular/core';
import {
  selectInput,
  selectIsLoading,
  selectMessages,
  selectSelectedDialog,
} from './chat.feature';
import * as action from './chat.action';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';
import { Message } from '../../pages/messenger/chat/chat.interface';
import { selectChatVm } from './chat.selector';
import { BaseStoreExtension } from '../base-store-extension';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade extends BaseStoreExtension {
  readonly selectedDialog$: Observable<Dialog | EssentialUserData | null> =
    this.store.select(selectSelectedDialog);
  readonly isLoading$ = this.store.select(selectIsLoading);
  readonly messages$ = this.store.select(selectMessages);
  readonly input$ = this.store.select(selectInput);
  readonly vm$ = this.store.select(selectChatVm);

  setSelectedDialog(selectedDialog: Dialog | EssentialUserData): void {
    this.dispatch(action.setSelectedDialog({ selectedDialog }));
  }

  resetSelectedDialog(): void {
    this.dispatch(action.resetSelectedDialog());
  }

  setInput(input: string): void {
    this.dispatch(action.setInput({ input }));
  }

  setMessage(messageData: { message: Message; withInputReset?: boolean }): void {
    this.dispatch(action.setMessage(messageData));
  }

  resetChatReducer(): void {
    this.dispatch(action.resetChatReducer());
  }
}
