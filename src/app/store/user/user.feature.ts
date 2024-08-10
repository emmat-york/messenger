import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Dialog, UserData } from './user.interface';
import * as action from './user.action';
import { USER_KEY } from '../constants/store.constant';

export interface UserState {
  userData: UserData | null;
  selectedDialog: Dialog | null;
}

const initialState: UserState = {
  userData: null,
  selectedDialog: null,
};

const userFeature = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
    on(action.setSelectedDialog, (state, { selectedDialog }) => ({
      ...state,
      selectedDialog,
    })),
  ),
});

export const { selectUserData, selectSelectedDialog, reducer } = userFeature;

export const selectUserVM = createSelector(
  selectUserData,
  selectSelectedDialog,
  (userData, selectedDialog) => ({
    userData,
    selectedDialog,
  }),
);
