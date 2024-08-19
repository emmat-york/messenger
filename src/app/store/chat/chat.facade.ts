import { Injectable } from '@angular/core';
import { ChatState, selectChatState } from './chat.feature';
import * as action from './chat.action';
import { BaseStoreFacade } from '../base-store-facade';
import { Observable } from 'rxjs';
import { Dialog } from '../user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade extends BaseStoreFacade {
  readonly vm$: Observable<ChatState> = this.store.select(selectChatState);

  setDialogs(dialogs: Dialog[]): void {
    this.dispatch(action.setDialogs({ dialogs }));
  }

  setSelectedDialog(selectedDialog: Dialog): void {
    this.dispatch(action.setSelectedDialog({ selectedDialog }));
  }

  resetSelectedDialog(): void {
    this.dispatch(action.resetSelectedDialog());
  }

  setInput(input: string): void {
    this.dispatch(action.setInput({ input }));
  }

  sendMessage(): void {
    this.dispatch(action.sendMessage());
  }
}
