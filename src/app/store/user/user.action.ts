import { createAction, props } from '@ngrx/store';

export const setUserData = createAction(
  '[User] setUserData',
  props<{ userData: object | null }>(),
);
