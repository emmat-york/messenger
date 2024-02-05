import {createAction, props} from "@ngrx/store";

export const setInput = createAction('[CHAT setInput]', props<{ input: string }>());
