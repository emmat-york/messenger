import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/chat.actions';

export interface ChatState {
  inputText: string;
}

export const initialState: ChatState = {
  inputText: '',
};

export const chatReducer = createReducer(
  initialState,
  on(actions.setInputText, (state, { inputText }) => ({
    ...state,
    inputText,
  })),
);
