import { createAction, props } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';

export const setInput = createAction('[CHAT] setInput', props<{ input: string }>());

export const sendMessage = createAction('[CHAT] sendMessage');
export const sendMessageFail = createAction('[CHAT] sendMessageFail');

export const setMessage = createAction(
  '[CHAT] setMessage',
  props<{ message: Message; roomId: string; withInputReset?: boolean }>(),
);

export const setMessagesHistorySuccess = createAction(
  '[CHAT] setMessagesHistorySuccess',
  props<{ messages: Message[] }>(),
);
export const setMessagesHistoryFail = createAction('[CHAT] setMessagesHistoryFail');
