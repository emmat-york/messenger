import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './auth.action';

export const AUTH_KEY = 'auth';

interface AuthState {
  isAuth: boolean;
  errorMsg: string;
}

const initialState: AuthState = {
  isAuth: false,
  errorMsg: '',
};

export const { selectErrorMsg, reducer } = createFeature({
  name: AUTH_KEY,
  reducer: createReducer(
    initialState,
    on(action.setIsAuth, (state, { isAuth }): AuthState => ({ ...state, isAuth })),
    on(action.setErrorMsg, (state, { errorMsg }): AuthState => ({ ...state, errorMsg })),
  ),
});
