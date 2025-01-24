import { createAction, props } from '@ngrx/store';
import { UserStoreState } from './user.feature';
import { Message } from '../../pages/messenger/chat/chat.interface';

export const setUser = createAction(
  '[USER] setUserData',
  props<{ payload: UserStoreState }>(),
);

export const updateDialogLastMessage = createAction(
  '[USER] updateDialogLastMessage',
  props<{ message: Message }>(),
);

export const resetUserReducer = createAction('[USER] resetUserReducer');
