import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestWithBody, SimpleRequest } from './interfaces/http.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<Result>({ url, options }: SimpleRequest): Observable<Result> {
    return this.httpClient.get<Result>(url, options);
  }

  post<Result, Body>({ url, body, options }: RequestWithBody<Body>): Observable<Result> {
    return this.httpClient.post<Result>(url, body, options);
  }

  put<Result, Body>({ url, body, options }: RequestWithBody<Body>): Observable<Result> {
    return this.httpClient.put<Result>(url, body, options);
  }

  delete<Result>({ url, options }: SimpleRequest): Observable<Result> {
    return this.httpClient.delete<Result>(url, options);
  }
}
