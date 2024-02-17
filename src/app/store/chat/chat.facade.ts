import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { chatVM } from './chat.feature';
import * as action from './chat.action';
import { Message } from './chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  chatVM$ = this.store.select(chatVM);

  constructor(private readonly store: Store) {}

  setInput(input: string): void {
    this.dispatch(action.setInput({ input }));
  }

  sendMessage(): void {
    this.dispatch(action.sendMessage());
  }

  setMessage(message: Message): void {
    this.dispatch(action.setMessage({ message }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
