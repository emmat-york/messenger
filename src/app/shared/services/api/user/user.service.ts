import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntireUserData } from '../../../../store/user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData$(idToken: string | null): Observable<EntireUserData> {
    return of({
      id: 1,
      userName: 'Andrei Filimonchyk',
      avatar: 'assets/icons/avatar.svg',
      settings: {
        theme: 'day-app-mode',
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
      },
    });
  }
}
