import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './user.action';

interface State {
  userData: object | null;
}

const initialState: State = {
  userData: null,
};

const reducer = createReducer(
  initialState,
  on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
);

export const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer,
});

export const { selectUserData } = userFeature;
