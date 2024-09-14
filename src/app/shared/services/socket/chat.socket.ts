import { Injectable } from '@angular/core';
import { Message } from '../../../pages/messenger/chat/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatSocket {
  init(): void {}

  subscribeToRoom(id: string): void {}

  request(message: Message, roomId: string | null): void {}
}
