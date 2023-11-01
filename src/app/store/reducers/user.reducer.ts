import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';
import * as actions from '../actions/user.actions';

export interface UserState {
  id: number | null;
  userName: string | null;
  phone: string | null;
  avatar: string | null;
  contacts: Contact[] | null;
  settings: any | null;
  selectedContact: Contact | null;
}

const initialState: UserState = {
  id: null,
  userName: null,
  phone: null,
  avatar: null,
  contacts: null,
  settings: null,
  selectedContact: null,
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
);
