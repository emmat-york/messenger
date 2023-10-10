import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signUp$(credentials: {}): Observable<any> {
    return of(null);
  }

  singIn$(credentials: {}): Observable<any> {
    return of(null);
  }

  singOut$(): Observable<any> {
    return of(null);
  }
}
