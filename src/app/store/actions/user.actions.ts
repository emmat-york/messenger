import { createAction, props } from '@ngrx/store';
import { UserData } from '../../pages/messanger/components/main/interfaces/main.interfaces';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';
import { Languages } from 'src/app/shared/enums/languages.enum';

export const setUser = createAction('[User] setUser', props<{ userData: UserData }>());
export const setSelectedContact = createAction(
  '[User] setSelectedContact',
  props<{ contact: Contact | null }>(),
);
export const setLanguage = createAction('[User] setLanguage', props<{ language: Languages }>());
