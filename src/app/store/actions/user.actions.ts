import { createAction, props } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const setUser = createAction('[User] setUser', props<{ userState: UserState }>());
