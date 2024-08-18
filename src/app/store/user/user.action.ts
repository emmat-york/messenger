import { createAction, props } from '@ngrx/store';
import { UserData } from './user.interface';

export const setUserData = createAction(
  '[USER] setUserData',
  props<{ userData: UserData | null }>(),
);
