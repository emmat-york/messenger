import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './user.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { ContactsService } from '../../pages/messenger/aside/menu-and-search-bar/user-menu/contacts/add-contact/add-contact.service';

@Injectable()
export class UserEffect {
  addContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.addContact),
      switchMap(({ contact }) => this.contactsService.addContact$(contact)),
      map(contact => actions.addContactSuccess({ contact })),
      catchError(() => of(actions.addContactFail())),
    );
  });

  constructor(
    private readonly contactsService: ContactsService,
    private readonly actions$: Actions,
  ) {}
}
