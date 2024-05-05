import { Injectable } from '@angular/core';
import { chatVM } from './chat.feature';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';
import * as action from './chat.action';
import { BaseStoreFacade } from '../utils/base-store-facade';

@Injectable({
  providedIn: 'root',
})
export class ChatFacade extends BaseStoreFacade {
  readonly chatVM$ = this.store.select(chatVM);

  setInput(input: string): void {
    this.dispatch(action.setInput({ input }));
  }

  sendMessage(): void {
    this.dispatch(action.sendMessage());
  }

  setMessage(message: Message): void {
    this.dispatch(action.setMessage({ message }));
  }
}
