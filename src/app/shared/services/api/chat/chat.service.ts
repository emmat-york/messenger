import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { Dialog } from '../../../../store/user/user.interface';
import { Message } from '../../../../pages/messenger/chat/chat.interface';
import { EmojiCategory } from '../../../../pages/messenger/chat/chat.enum';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly httpClient: HttpClient) {}

  getUserDialogs$(id: number): Observable<Dialog[]> {
    return of([
      {
        id: 2,
        userName: 'Pavel Filimonchyk  asdfasd fasdfasdfas dfasd fasdf',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-1',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-1',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 3,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-2',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-2',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 4,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-3',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-3',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 5,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-4',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-4',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 6,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-5',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-5',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 7,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-6',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-6',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 8,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-7',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-7',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 9,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-8',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-8',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 10,
        userName: 'Pavel Filimonchyk',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-9',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-9',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 11,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-10',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-10',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 12,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-11',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-11',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 13,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-12',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-12',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 14,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-13',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-13',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 15,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: false,
        roomId: 'room-14',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-14',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 16,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-15',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-15',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
      {
        id: 17,
        userName: 'Pavel',
        avatar: 'assets/icons/avatar.svg',
        isOnline: true,
        roomId: 'room-16',
        lastMessage: {
          id: 1,
          uuid: 2,
          message: 'hello, mather fucker!',
          userName: 'Pavel',
          roomId: 'room-16',
          creationDate: '01-01-2020',
          editDate: null,
        },
      },
    ]);
  }

  getChatHistoryByRoomId$(roomId: string): Observable<Message[]> {
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
    ]).pipe(delay(2000));
  }
}
