import {createReducer, on} from "@ngrx/store";
import {setInput} from "./chat.action";

export interface ChatState {
  input: string;
  messages: any[];
}

const INITIAL_STATE: ChatState = {
  input: '',
  messages: [],
};

export const chatReducer = createReducer(INITIAL_STATE, on(setInput, (state, { input }): ChatState => {
  return {
    ...state,
    input,
  };
}));
