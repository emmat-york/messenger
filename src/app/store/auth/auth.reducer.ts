import { createReducer, on } from '@ngrx/store';
import * as actions from './auth.actions';

export interface AuthState {
  isAuth: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(actions.signUpResponse, (state, { response }) => ({
    ...state,
    isAuth: true,
  })),
  on(actions.signInResponse, (state, { response }) => ({
    ...state,
    isAuth: true,
  })),
  on(actions.signOutResponse, (state, { response }) => ({
    ...state,
    isAuth: false,
  })),
  on(actions.setErrorMessage, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
);
