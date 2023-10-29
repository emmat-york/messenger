import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../pages/messanger/components/main/components/contacts/components/interfaces/contact.interfaces';
import * as actions from '../actions/user.actions';

export interface UserState {
  id: number;
  userName: string;
  phone: string;
  avatar: string;
  contacts: Contact[];
  settings: any;
}

let initialState: UserState | undefined;

export const userReducer = createReducer(
  initialState,
  on(actions.setUser, (state, { userState }) => {
    return {
      ...state,
      ...userState,
    };
  }),
);
