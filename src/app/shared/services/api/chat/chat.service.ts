import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from '../../../../pages/messenger/chat/chat.interface';
import { EmojiCategory } from '../../../../pages/messenger/chat/chat.enum';
import { Dialog } from './chat-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly http: HttpClient) {}

  getUserDialogs$(id: number): Observable<Dialog[]> {
    return of([
      {
        id: 2,
        name: 'Pavel Filimonchyk  asdfasd fasdfasdfas dfasd fasdf',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-1',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Gvardiola',
          roomId: 'room-1',
          creationDate: '01-01-2020',
          editDate: null,
          likes: [
            {
              type: '',
              count: 1,
              emoji: {
                no: 1,
                title: 'face with tears of joy',
                category: EmojiCategory.Favorites,
                pic: '😂',
              },
            },
          ],
        },
      },
      {
        id: 3,
        name: 'Pavel Filimonchyk',
        avatar: null,
        isOnline: false,
        roomId: 'room-2',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Gvardiola',
          roomId: 'room-1',
          creationDate: '01-01-2020',
          editDate: null,
          likes: [
            {
              type: '',
              count: 1,
              emoji: {
                no: 1,
                title: 'face with tears of joy',
                category: EmojiCategory.Favorites,
                pic: '😂',
              },
            },
          ],
        },
      },
    ]);
  }

  getChatHistoryByRoomId$(roomId: string | null): Observable<Message[]> {
    return of([
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
      {
        id: 1,
        uuid: 2,
        message: 'hello, mather fucker!',
        userName: 'Gvardiola',
        roomId: 'room-1',
        creationDate: '01-01-2020',
        editDate: null,
        likes: [
          {
            type: '',
            count: 1,
            emoji: {
              no: 1,
              title: 'face with tears of joy',
              category: EmojiCategory.Favorites,
              pic: '😂',
            },
          },
        ],
      },
    ]);
  }
}
