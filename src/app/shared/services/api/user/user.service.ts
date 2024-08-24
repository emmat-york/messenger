import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FullUserData } from '../../../../store/user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData$(idToken: string | null): Observable<FullUserData> {
    return of({
      id: 1,
      userName: 'Andrei Filimonchyk',
      avatar: 'assets/icons/avatar.svg',
      settings: {
        theme: 'dark-app-theme',
        version: '1.0.0',
        isNotificationSoundOn: true,
        languages: [],
        selectedLanguage: '',
      },
    });
  }
}
