import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Contact, UserData } from './user.interface';
import * as action from './user.action';

export interface UserState {
  userData: UserData | null;
  selectedContact: Contact | null;
}

const initialState: UserState = {
  userData: null,
  selectedContact: null,
};

const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer: createReducer(
    initialState,
    on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
    on(action.setSelectedContact, (state, { selectedContact }) => ({
      ...state,
      selectedContact,
    })),
  ),
});

export const { selectUserData, selectSelectedContact, reducer } = userFeature;

export const selectUserVM = createSelector(
  selectUserData,
  selectSelectedContact,
  (userData, selectedContact) => ({
    userData,
    selectedContact,
  }),
);
