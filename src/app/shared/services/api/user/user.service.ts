import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../store/user/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  getUserData$(token: string): Observable<UserData> {
    return of({
      id: 1,
      phoneNumber: '12345678',
      userName: 'Andrew',
      avatar: 'assets/icons/system/avatar.svg',
      contacts: [
        {
          id: 2,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          roomId: {
            1: 'room-1',
            2: 'room-2',
          },
        },
        {
          id: 3,
          phoneNumber: '+375259273424',
          userName: 'Roman',
          avatar: 'assets/icons/system/avatar.svg',
          roomId: {
            1: 'room-1',
            2: 'room-2',
          },
        },
        {
          id: 4,
          phoneNumber: '+375259273425',
          userName: 'Sergei',
          avatar: 'assets/icons/system/avatar.svg',
          roomId: {
            1: 'room-1',
            2: 'room-2',
          },
        },
      ],
    });
  }
}
