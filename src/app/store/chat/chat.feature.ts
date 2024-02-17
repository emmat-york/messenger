import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Message } from './chat.interface';
import * as action from './chat.action';

interface State {
  input: string;
  roomId: string | null;
  messages: Message[];
}

const initialState: State = {
  input: '',
  roomId: null,
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
  on(action.resetInput, (state): State => ({ ...state, input: '' })),
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
