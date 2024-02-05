import {createFeature, createReducer, createSelector, on} from "@ngrx/store";
import {setInput} from "./chat.action";

interface ChatState {
  input: string;
  messages: any[];
}

const initialState: ChatState = {
  input: '',
  messages: [],
};

const reducer = createReducer(initialState, on(setInput, (state, { input }): ChatState => ({
    ...state,
    input,
})));

export const chatFeature = createFeature({
  name: 'chatFeatureKey',
  reducer,
  extraSelectors: ({ selectInput, selectMessages }) => ({
    chatVM: createSelector(selectInput, selectMessages, (input, messages) => ({
      input,
      messages,
    }))
  }),
});

export const { chatVM } = chatFeature;
