import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as selectors from '../../../store/selectors/chat.selectors';
import * as actions from '../../../store/actions/chat.actions';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  inputText$ = this.store.select(selectors.inputText);

  constructor(private store: Store) {}

  setInputText(inputText: string): void {
    this.dispatch(actions.setInputText({ inputText }));
  }

  sendMessage(): void {
    this.dispatch(actions.sendMessage());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}