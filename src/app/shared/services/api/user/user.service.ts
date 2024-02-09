import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  getUserData$(token: string): Observable<object> {
    return of({});
  }
}
