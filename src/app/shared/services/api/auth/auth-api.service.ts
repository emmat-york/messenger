import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '../../../interfaces/auth.interfaces';
import { HttpClient } from '@angular/common/http';
import { UserState } from '../../../../store/reducers/user.reducer';
import { CONTACTS } from '../../../../mocks/mocks';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signUp$(credentials: AuthCredentials): Observable<UserState> {
    return of({
      id: 1,
      userName: 'Andrew Filimonchyk',
      phone: '+48 696 761 073',
      avatar: '',
      contacts: CONTACTS,
      settings: {},
    });
  }

  singIn$(credentials: AuthCredentials): Observable<UserState> {
    return of({
      id: 1,
      userName: 'Andrew Filimonchyk',
      phone: '+48 696 761 073',
      avatar: '',
      contacts: CONTACTS,
      settings: {},
    });
  }

  singOut$(): Observable<null> {
    return of(null);
  }
}
