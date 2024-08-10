import { Injectable } from '@angular/core';
import { ChatState, chatVM } from './chat.feature';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';
import * as action from './chat.action';
import { BaseStoreFacade } from '../utils/base-store-facade';
import { Observable } from 'rxjs';

@Injectable()
export class ChatFacade extends BaseStoreFacade {
  readonly vm$: Observable<ChatState> = this.store.select(chatVM);

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
