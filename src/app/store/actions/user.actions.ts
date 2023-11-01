import { createAction, props } from '@ngrx/store';
import { UserData } from '../../pages/messanger/components/main/interfaces/main.interfaces';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';

export const setUser = createAction('[User] setUser', props<{ userData: UserData }>());
export const setSelectedContact = createAction(
  '[User] setSelectedContactId',
  props<{ contact: Contact | null }>(),
);
