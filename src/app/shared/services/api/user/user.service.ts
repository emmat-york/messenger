import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../store/user/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  getUserData$(idToken: string): Observable<UserData> {
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
      ],
    });
  }
}
