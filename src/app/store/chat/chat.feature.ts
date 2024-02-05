import {createFeature, createReducer, createSelector, on} from "@ngrx/store";
import {setInput} from "./chat.action";
import {ChatState} from "./chat.interface";
import {chatFeatureKey} from "./chat.constant";

const INITIAL_STATE: ChatState = {
  input: '',
  messages: [],
};

const reducer = createReducer(INITIAL_STATE, on(setInput, (state, { input }): ChatState => ({
    ...state,
    input,
})));

export const chatFeature = createFeature({
  name: chatFeatureKey,
  reducer,
  extraSelectors: ({ selectInput, selectMessages }) => ({
    chatVM: createSelector(selectInput, selectMessages, (input, messages) => ({
      input,
      messages,
    }))
  }),
});

export const { chatVM } = chatFeature;
