import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client/build/esm/socket';
import { Observable } from 'rxjs';
import { Message } from '../../../../store/chat/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private readonly socket: Socket;
  private readonly url = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.url);
  }

  joinRoom(userName: string, roomId: string): void {
    this.socket.emit('join', { userName, roomId });
  }

  sendMessage(message: Message): void {
    this.socket.emit('message', message);
  }

  getMessage$(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('new message', message => {
        observer.next(message);
      });

      return () => this.socket.disconnect();
    });
  }
}
