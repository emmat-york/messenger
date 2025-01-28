import { createAction, props } from '@ngrx/store';
import { UserStoreState } from './user.feature';
import { Message } from '../../pages/messenger/chat/chat.interface';
import { EssentialUserData } from '../../shared/services/api/chat/chat-service.interface';

export const setUser = createAction(
  '[USER] setUserData',
  props<{ payload: UserStoreState }>(),
);

export const updateDialogLastMessage = createAction(
  '[USER] updateDialogLastMessage',
  props<{ message: Message }>(),
);

export const addContact = createAction(
  '[USER] addContact',
  props<{ contact: EssentialUserData }>(),
);
export const addContactSuccess = createAction(
  '[USER] addContactSuccess',
  props<{ contact: EssentialUserData }>(),
);
export const addContactFail = createAction('[USER] addContactFail');

export const resetUserReducer = createAction('[USER] resetUserReducer');
