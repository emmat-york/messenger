import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '../../../interfaces/auth.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signUp$(credentials: AuthCredentials): Observable<AuthCredentials> {
    return of(credentials);
  }

  singIn$(credentials: AuthCredentials): Observable<AuthCredentials> {
    return of(credentials);
  }

  singOut$(): Observable<null> {
    return of(null);
  }
}
