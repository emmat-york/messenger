import { createAction, props } from '@ngrx/store';
import { Dialog, UserData } from './user.interface';

export const setUserData = createAction(
  '[USER] setUserData',
  props<{ userData: UserData | null }>(),
);

export const setSelectedDialog = createAction(
  '[USER] setSelectedDialog',
  props<{ selectedDialog: Dialog | null }>(),
);
