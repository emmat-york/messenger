import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../store/user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUserData$(idToken: string | null): Observable<UserData> {
    return of({
      id: 1,
      phoneNumber: '12345678',
      userName: 'Andrei Filimonchyk',
      avatar: 'assets/icons/system/avatar.svg',
    });
  }
}
