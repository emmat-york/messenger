import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { UserData } from './user.interface';
import * as action from './user.action';

export const USER_KEY = 'user';

export interface UserState {
  userData: UserData | null;
}

const initialState: UserState = {
  userData: null,
};

export const { selectUserData, reducer } = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
  ),
});

export const selectUserVM = createSelector(selectUserData, userData => ({
  userData,
}));
