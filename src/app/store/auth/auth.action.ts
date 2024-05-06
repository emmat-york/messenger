import { createAction, props } from '@ngrx/store';

export const setIsAuth = createAction(
  '[AUTH] setIsAuth',
  props<{ isAuth: boolean }>(),
);
