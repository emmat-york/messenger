import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LOGIN_PATH, REGISTRATION_PATH } from './auth.constant';
import {
  LoginCredentials,
  LoginResponse,
  RegistrationCredentials,
  RegistrationResponse,
} from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login$(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(LOGIN_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }

  registration$(credentials: RegistrationCredentials): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(REGISTRATION_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }

  logOut$(): Observable<void> {
    return of(undefined);
  }
}
