import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';
import * as action from './chat.action';

interface State {
  input: string;
  messages: Message[];
}

const initialState: State = {
  input: '',
  messages: [],
};

const reducer = createReducer(
  initialState,
  on(
    action.setInput,
    (state, { input }): State => ({
      ...state,
      input,
    }),
  ),
  on(action.sendMessage, (state): State => ({ ...state, input: '' })),
  on(action.resetInput, (state): State => ({ ...state, input: '' })),
  on(
    action.setMessagesHistory,
    (state, { messages }): State => ({
      ...state,
      messages,
    }),
  ),
  on(action.setMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  })),
);

export const chatFeature = createFeature({
  name: 'chatFeatureKey',
  reducer,
  extraSelectors: ({ selectInput, selectMessages }) => ({
    chatVM: createSelector(selectInput, selectMessages, (input, messages) => ({
      input,
      messages,
    })),
  }),
});

export const { chatVM } = chatFeature;
