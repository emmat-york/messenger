import { createAction, props } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/chat.interface';
import { Dialog } from '../user/user.interface';

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
  props<{ message: Message; roomId: string; withInputReset?: boolean }>(),
);
