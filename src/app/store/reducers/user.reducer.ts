import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';
import { Languages } from 'src/app/shared/enums/languages.enum';
import * as actions from '../actions/user.actions';

export interface UserState {
  id: number | null;
  userName: string | null;
  phone: string | null;
  avatar: string | null;
  contacts: Contact[];
  settings: any | null;
  selectedContact: Contact | null;
  language: Languages;
}

const initialState: UserState = {
  id: null,
  userName: null,
  phone: null,
  avatar: null,
  contacts: [],
  settings: null,
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
