import { createAction, props } from '@ngrx/store';
import { Message } from './chat.interface';

export const setInput = createAction(
  '[CHAT] setInput',
  props<{ input: string }>(),
);
export const sendMessage = createAction('[CHAT] sendMessage');
export const resetInput = createAction('[CHAT] resetInput');
export const setMessage = createAction(
  '[CHAT] setMessage',
  props<{ message: Message }>(),
);
export const unauthorized = createAction('[CHAT] unauthorized');
