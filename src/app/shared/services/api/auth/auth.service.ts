import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_PATH, REGISTRATION_PATH } from './constants/auth.constant';
import {
  LoginCredentials,
  LoginResponse,
  RegistrationCredentials,
  RegistrationResponse,
} from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login$(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(LOGIN_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(REGISTRATION_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }
}
