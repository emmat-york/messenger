import { createAction, props } from '@ngrx/store';

export const setInput = createAction(
  '[Chat] setInput',
  props<{ input: string }>(),
);

export const sendMessage = createAction('[Chat] sendMessage');
