import { createAction, props } from '@ngrx/store';

export const setInputText = createAction(
  '[Chat] setInputText',
  props<{ inputText: string }>(),
);

export const sendMessage = createAction('[Chat] sendMessage');
