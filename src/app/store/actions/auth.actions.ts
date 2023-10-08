import { createAction } from "@ngrx/store";

// Sign Up
export const signUpRequest = createAction('[Auth] signUpRequest');
export const signUpResponse = createAction('[Auth] signUpResponse');

// Sign In
export const signInRequest = createAction('[Auth] signInRequest');
export const signInResponse = createAction('[Auth] signInResponse');

// Sign Out
export const signOutRequest = createAction('[Auth] signOutRequest');
export const signOutResponse = createAction('[Auth] signOutResponse');
