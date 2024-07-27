import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';
import * as action from './chat.action';
import { CHAT_KEY } from '../constants/store.constant';

export interface ChatState {
  input: string;
  messages: Message[];
}

const initialState: ChatState = {
  input: '',
  messages: [],
};

const chatFeature = createFeature({
  name: CHAT_KEY,
  reducer: createReducer(
    initialState,
    on(
      action.setInput,
      (state, { input }): ChatState => ({
        ...state,
        input,
      }),
    ),
    on(action.sendMessage, (state): ChatState => ({ ...state, input: '' })),
    on(action.resetInput, (state): ChatState => ({ ...state, input: '' })),
    on(
      action.setMessagesHistory,
      (state, { messages }): ChatState => ({
        ...state,
        messages,
      }),
    ),
    on(action.setMessage, (state, { message }) => ({
      ...state,
      messages: [...state.messages, message],
    })),
  ),
  extraSelectors: ({ selectInput, selectMessages }) => ({
    chatVM: createSelector(selectInput, selectMessages, (input, messages) => ({
      input,
      messages,
    })),
  }),
});

export const { chatVM, reducer } = chatFeature;
