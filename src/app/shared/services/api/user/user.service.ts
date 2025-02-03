import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FullCurrentUserData } from './user-service.interface';
import { EmojiCategory } from '../../../../pages/messenger/chat/chat.enum';
import { Language } from '../../../enums/languages.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData$(idToken: string | null): Observable<FullCurrentUserData> {
    return of({
      uuid: 1,
      name: 'Andrei Filimonchyk',
      avatar: 'assets/icons/system/avatar.svg',
      isYou: true,
      isYourContact: false,
      dialogs: [
        {
          uuid: 2,
          name: 'Andrew Tate',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: false,
          roomId: 1,
          isYou: false,
          isYourContact: true,
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
          uuid: 3,
          name: 'Pavel Filimonchyk',
          avatar: null,
          isOnline: false,
          roomId: 2,
          isYou: false,
          isYourContact: false,
          lastMessage: {
            id: 1,
            uuid: 3,
            message: 'hello, mather fucker!',
            userName: 'Gvardiola',
            roomId: 2,
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
      contacts: [
        {
          uuid: 2,
          name: 'Andrew Tate',
          avatar: 'assets/icons/system/avatar.svg',
          isYou: false,
          isYourContact: true,
        },
        {
          uuid: 102,
          name: 'Mah Dee',
          avatar: null,
          isYou: false,
          isYourContact: false,
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
        {
          id: 3,
          version: '1.3.0',
          releaseDate: '01-08-2024',
          updates: [
            'Support multiple boosts and reassignment.',
            'Improve giveaway creation flow.',
            'Fix crash in topics creation.',
          ],
        },
        {
          id: 4,
          version: '1.4.0',
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
      languages: Object.values(Language),
      selectedLanguage: Language.En,
    });
  }
}
