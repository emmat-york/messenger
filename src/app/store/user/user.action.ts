import { createAction, props } from '@ngrx/store';
import { Contact, UserData } from './user.interface';

export const setUserData = createAction(
  '[USER] setUserData',
  props<{ userData: UserData | null }>(),
);

export const setSelectedContact = createAction(
  '[USER] setSelectedContact',
  props<{ selectedContact: Contact | null }>(),
);
