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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login$(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(LOGIN_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.httpClient.post<RegistrationResponse>(REGISTRATION_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }
}
