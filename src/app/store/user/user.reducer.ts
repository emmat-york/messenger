import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interface';
import { UserData } from 'src/app/pages/messanger/components/main/interfaces/main.interface';
import { Languages } from 'src/app/shared/enums/languages.enum';
import { createReducer, on } from '@ngrx/store';
import * as actions from './user.actions';

export interface UserState {
  userData: UserData | null;
  selectedContact: Contact | null;
  language: Languages;
}

const initialState: UserState = {
  userData: null,
  selectedContact: null,
  language: Languages.En,
};

export const userReducer = createReducer(
  initialState,
  on(actions.setUser, (state, { userData }) => ({
    ...state,
    ...userData,
  })),
  on(actions.setSelectedContact, (state, { contact }) => ({
    ...state,
    selectedContact: contact,
  })),
  on(actions.setLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
);
