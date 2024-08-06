import { createAction, props } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';

export const setInput = createAction('[CHAT] setInput', props<{ input: string }>());

export const sendMessage = createAction('[CHAT] sendMessage');

export const resetInput = createAction('[CHAT] resetInput');

export const setMessage = createAction(
  '[CHAT] setMessage',
  props<{ message: Message }>(),
);

export const setMessagesHistory = createAction(
  '[CHAT] setMessagesHistory',
  props<{ messages: Message[] }>(),
);
