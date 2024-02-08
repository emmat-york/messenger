import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import * as action from './chat.action';

interface State {
  input: string;
  messages: any[];
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
