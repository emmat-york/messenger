import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login$(credentials: any): Observable<any> {
    return of({});
  }

  registration$(credentials: any): Observable<any> {
    return of({});
  }

  logOut$(): Observable<any> {
    return of({});
  }
}
