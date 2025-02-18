import { createAction, props } from '@ngrx/store';
import { Message } from '../../pages/messenger/chat/chat.interface';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

export const setSelectedDialog = createAction(
  '[CHAT] setSelectedDialog',
  props<{ selectedDialog: Dialog | EssentialUserData }>(),
);
export const setSelectedDialogSuccess = createAction(
  '[CHAT] setSelectedDialogSuccess',
  props<{ messages: Message[] }>(),
);
export const setSelectedDialogFail = createAction('[CHAT] setSelectedDialogFail');

export const resetSelectedDialog = createAction('[CHAT] resetSelectedDialog');
export const setInput = createAction('[CHAT] setInput', props<{ input: string }>());

export const setMessage = createAction(
  '[CHAT] setMessage',
  props<{ message: Message; withInputReset?: boolean }>(),
);

export const resetChatReducer = createAction('[CHAT] resetChatReducer');
