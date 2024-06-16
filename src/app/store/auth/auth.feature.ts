import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './auth.action';

export interface AuthState {
  isAuth: boolean;
  errorMsg: string;
}

const initialState: AuthState = {
  isAuth: false,
  errorMsg: '',
};

const authFeature = createFeature({
  name: 'authFeatureKey',
  reducer: createReducer(
    initialState,
    on(
      action.setIsAuth,
      (state, { isAuth }): AuthState => ({ ...state, isAuth }),
    ),
    on(
      action.setErrorMsg,
      (state, { errorMsg }): AuthState => ({ ...state, errorMsg }),
    ),
  ),
});

export const { selectIsAuth, selectErrorMsg, reducer } = authFeature;
