import { Message } from 'src/app/pages/messanger/components/main/components/contacts/components/interfaces/contact.interface';
import { createReducer, on } from '@ngrx/store';
import * as actions from './chat.actions';

export interface ChatState {
  input: string;
  messages: Message[],
  isScrollCircleShown: boolean;
}

export const initialState: ChatState = {
  input: '',
  messages: [],
  isScrollCircleShown: false,
};

export const chatReducer = createReducer(
  initialState,
  on(actions.setInput, (state, { input }): ChatState => ({
    ...state,
    input,
  })),
);
