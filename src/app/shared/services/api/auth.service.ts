import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '../../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signUp$(credentials: AuthCredentials): Observable<null> {
    console.log(credentials);
    return of(null);
  }

  singIn$(credentials: AuthCredentials): Observable<null> {
    console.log(credentials);
    return of(null);
  }

  singOut$(): Observable<null> {
    return of(null);
  }
}
