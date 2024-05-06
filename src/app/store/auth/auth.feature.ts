import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './auth.action';

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

const authFeature = createFeature({
  name: 'authFeatureKey',
  reducer: createReducer(
    initialState,
    on(
      action.setIsAuth,
      (state, { isAuth }): AuthState => ({ ...state, isAuth }),
    ),
  ),
});

export const { selectIsAuth, reducer } = authFeature;
