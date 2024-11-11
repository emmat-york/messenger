import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FullCurrentUserData } from './user-service.interface';
import { EmojiCategory } from '../../../../pages/messenger/chat/chat.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData$(idToken: string | null): Observable<FullCurrentUserData> {
    return of({
      id: 1,
      name: 'Andrei Filimonchyk',
      avatar: 'assets/icons/system/avatar.svg',
      dialogs: [
        {
          id: 2,
          name: 'Andrew Tate',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: false,
          roomId: 1,
          lastMessage: {
            id: 1,
            uuid: 2,
            message: 'hello, mather fucker!',
            userName: 'Gvardiola',
            roomId: 1,
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
          roomId: 2,
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
      ],
      isNightMode: false,
      versions: [
        {
          id: 1,
          version: '1.0.0',
          releaseDate: '01-08-2024',
          updates: [
            'Support multiple boosts and reassignment.',
            'Improve giveaway creation flow.',
            'Fix crash in topics creation.',
          ],
        },
        {
          id: 2,
          version: '1.1.0',
          releaseDate: '10-11-2024',
          updates: [
            'Highlight quoted parts in jump-to-message from replies.',
            'Ctrl+Click on message field reply bar to jump to message.',
            'Fix empty link preview displaying when generation failed.',
            'Fix external replies in topic groups.',
            'Allow enabling legacy tray icon on Windows.',
          ],
        },
      ],
      isNotificationSoundOn: true,
      languages: [],
      selectedLanguage: '',
    });
  }
}
