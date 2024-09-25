import { Injectable } from '@angular/core';
import { ChatState, selectChatState, selectSelectedDialog } from './chat.feature';
import * as action from './chat.action';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Dialog } from '../../shared/services/api/chat/chat-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  readonly vm$: Observable<ChatState> = this.store.select(selectChatState);
  readonly selectedDialog$ = this.store.select(selectSelectedDialog);

  constructor(private readonly store: Store) {}

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

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
