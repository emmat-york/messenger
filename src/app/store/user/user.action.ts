import { createAction, props } from '@ngrx/store';
import { UserData } from './user.interface';

export const setUserData = createAction(
  '[User] setUserData',
  props<{ userData: UserData | null }>(),
);

export const setSelectedUserId = createAction(
  '[User] setSelectedUserId',
  props<{ selectedUserId: number | null }>(),
);
