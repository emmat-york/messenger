import { createAction, props } from '@ngrx/store';

export const setInput = createAction('[CHAT setInput]', props<{ input: string }>());
export const sendMessage = createAction('[CHAT sendMessage]');
