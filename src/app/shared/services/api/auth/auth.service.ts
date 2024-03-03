import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REGISTRATION_PATH } from './constants/auth.constant';
import {
  RegistrationCredentials,
  RegistrationResponse,
} from './interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login$(credentials: any): Observable<any> {
    return this.httpClient.post('', credentials);
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.httpClient.post<RegistrationResponse>(REGISTRATION_PATH, {
      ...credentials,
      returnSecureToken: true,
    });
  }

  logOut$(): Observable<any> {
    return this.httpClient.post('', 1);
  }
}
