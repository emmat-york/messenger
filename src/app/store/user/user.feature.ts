import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { UserData } from './user.interface';
import * as action from './user.action';
import { USER_KEY } from '../constants/store.constant';

export interface UserState {
  userData: UserData | null;
}

const initialState: UserState = {
  userData: null,
};

const userFeature = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
  ),
});

export const { selectUserData, reducer } = userFeature;

export const selectUserVM = createSelector(selectUserData, userData => ({
  userData,
}));
