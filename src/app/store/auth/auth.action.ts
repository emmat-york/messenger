import { createAction, props } from '@ngrx/store';

export const setIsAuth = createAction('[AUTH] setIsAuth', props<{ isAuth: boolean }>());
export const setErrorMsg = createAction(
  '[AUTH] setErrorMsg',
  props<{ errorMsg: string }>(),
);
export const logOut = createAction('[AUTH] logOut');
export const logOutSuccess = createAction('[AUTH] logOutSuccess');
export const logOutFail = createAction('[AUTH] logOutFail');
