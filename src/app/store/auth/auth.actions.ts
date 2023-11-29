import { createAction, props } from '@ngrx/store';
import { AuthCredentials } from '../../shared/interfaces/auth.interface';

// Sign Up
export const signUpRequest = createAction(
  '[Auth] signUpRequest',
  props<{ credentials: AuthCredentials }>(),
);

export const signUpResponse = createAction(
  '[Auth] signUpResponse',
  props<{ response: any }>(),
);

// Sign In
export const signInRequest = createAction(
  '[Auth] signInRequest',
  props<{ credentials: AuthCredentials }>(),
);

export const signInResponse = createAction(
  '[Auth] signInResponse',
  props<{ response: any }>(),
);

// Sign Out
export const signOutRequest = createAction('[Auth] signOutRequest');
export const signOutResponse = createAction(
  '[Auth] signOutResponse',
  props<{ response: any }>(),
);

// Common
export const setErrorMessage = createAction(
  '[Auth] setErrorMessage',
  props<{ errorMessage: string | null }>(),
);
