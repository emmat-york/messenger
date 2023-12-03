import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as selectors from './chat.selectors';
import * as actions from './chat.actions';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  inputText$ = this.store.select(selectors.inputText);

  constructor(private store: Store) {}

  setInput(input: string): void {
    this.dispatch(actions.setInput({ input }));
  }

  sendMessage(): void {
    this.dispatch(actions.sendMessage());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
