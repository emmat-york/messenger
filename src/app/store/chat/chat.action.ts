import { createAction, props } from '@ngrx/store';
import { Message } from '../../pages/messenger/chat/chat.interface';
import { Dialog } from '../../shared/services/api/chat/chat-service.interface';

export const setDialogs = createAction(
  '[CHAT] setDialogs',
  props<{ dialogs: Dialog[] }>(),
);

export const setSelectedDialog = createAction(
  '[CHAT] setSelectedDialog',
  props<{ selectedDialog: Dialog }>(),
);
export const setSelectedDialogSuccess = createAction(
  '[CHAT] setSelectedDialogSuccess',
  props<{ messages: Message[] }>(),
);
export const setSelectedDialogFail = createAction('[CHAT] setSelectedDialogFail');

export const resetSelectedDialog = createAction('[CHAT] resetSelectedDialog');
export const setInput = createAction('[CHAT] setInput', props<{ input: string }>());

export const sendMessage = createAction('[CHAT] sendMessage');
export const sendMessageFail = createAction('[CHAT] sendMessageFail');
export const setMessage = createAction(
  '[CHAT] setMessage',
  props<{ message: Message; dialogId: number; withInputReset?: boolean }>(),
);
