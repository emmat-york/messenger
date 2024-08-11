import { createAction, props } from '@ngrx/store';
import { Dialog, UserData } from './user.interface';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';

export const setUserData = createAction(
  '[USER] setUserData',
  props<{ userData: UserData | null }>(),
);

export const setSelectedDialog = createAction(
  '[USER] setSelectedDialog',
  props<{ selectedDialog: Dialog | null }>(),
);

export const updateLastMessage = createAction(
  '[USER] updateLastMessage',
  props<{ message: Message; roomId: string }>(),
);
