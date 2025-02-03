import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EssentialUserData } from '../../../../../../../shared/services/api/chat/chat-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private readonly httpClient: HttpClient) {}

  getContactByEmail$(email: string): Observable<EssentialUserData[]> {
    return of([
      {
        uuid: 2,
        name: 'Andrew Tate',
        avatar: 'assets/icons/system/avatar.svg',
        isYourContact: true,
        isYou: false,
      },
      {
        uuid: 88,
        name: 'Julia Julia',
        avatar: null,
        isYourContact: false,
        isYou: false,
      },
    ]);
  }

  addContact$(contact: EssentialUserData): Observable<EssentialUserData> {
    return of({ ...contact, isYourContact: true });
  }
}
