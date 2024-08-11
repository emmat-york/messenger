import { Injectable } from '@angular/core';
import { ChatState, chatVM } from './chat.feature';
import * as action from './chat.action';
import { BaseStoreFacade } from '../utils/base-store-facade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade extends BaseStoreFacade {
  readonly vm$: Observable<ChatState> = this.store.select(chatVM);

  setInput(input: string): void {
    this.dispatch(action.setInput({ input }));
  }

  sendMessage(): void {
    this.dispatch(action.sendMessage());
  }
}
