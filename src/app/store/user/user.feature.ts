import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { UserData } from './user.interface';
import * as action from './user.action';

interface State {
  userData: UserData | null;
  selectedUserId: number | null;
}

const initialState: State = {
  userData: null,
  selectedUserId: null,
};

const reducer = createReducer(
  initialState,
  on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
  on(action.setSelectedUserId, (state, { selectedUserId }) => ({
    ...state,
    selectedUserId,
  })),
);

export const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer,
});

const { selectUserData, selectSelectedUserId } = userFeature;
export const selectUserVM = createSelector(
  selectUserData,
  selectSelectedUserId,
  (userData, selectedUserId) => ({
    userData,
    selectedUserId,
  }),
);
