import { createAction, props } from '@ngrx/store';
import { UserStoreState } from './user.feature';

export const setUser = createAction(
  '[USER] setUserData',
  props<{ payload: UserStoreState }>(),
);
