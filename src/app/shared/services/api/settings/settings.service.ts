import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private readonly http: HttpClient) {}

  setIsNightMode$(isNightMode: boolean): Observable<boolean> {
    return of(isNightMode);
  }

  setNotificationSoundState$(state: boolean): Observable<boolean> {
    return of(state);
  }
}
