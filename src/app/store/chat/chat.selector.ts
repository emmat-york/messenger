import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CHAT_KEY, ChatState } from './chat.feature';

const featureSelector = createFeatureSelector<ChatState>(CHAT_KEY);

export const selectChatVm = createSelector(featureSelector, state => ({
  selectedDialog: state.selectedDialog,
  isLoading: state.isLoading,
  messages: state.messages,
  input: state.input,
}));
