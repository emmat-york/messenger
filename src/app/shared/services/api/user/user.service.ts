import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../store/user/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUserData$(idToken: string | null): Observable<UserData> {
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
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 4,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 5,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 6,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 7,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 8,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 9,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 10,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 11,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 12,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 13,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 14,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 15,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
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
          id: 16,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
          id: 17,
          phoneNumber: '+375259273423',
          userName: 'Pavel',
          avatar: 'assets/icons/system/avatar.svg',
          isOnline: true,
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
