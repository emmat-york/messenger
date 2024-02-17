import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Contact, UserData } from './user.interface';
import * as action from './user.action';

interface State {
  userData: UserData | null;
  selectedContact: Contact | null;
}

const initialState: State = {
  userData: null,
  selectedContact: null,
};

const reducer = createReducer(
  initialState,
  on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
  on(action.setSelectedContact, (state, { selectedContact }) => ({
    ...state,
    selectedContact,
  })),
);

export const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer,
});

const { selectUserData, selectSelectedContact } = userFeature;
export const selectUserVM = createSelector(
  selectUserData,
  selectSelectedContact,
  (userData, selectedContact) => ({
    userData,
    selectedContact,
  }),
);
