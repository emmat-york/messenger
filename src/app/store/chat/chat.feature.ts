import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './chat.action';
import { Message } from '../../pages/messenger/chat/chat.interface';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

export const CHAT_KEY = 'chat';

export interface ChatState {
  selectedDialog: null | EssentialUserData | Dialog;
  messages: Message[];
  isLoading: boolean;
  input: string;
}

// Контакт - это EssentialUserData, а диалог - это EssentialUserData + диалоговые поля

const initialState: ChatState = {
  selectedDialog: null,
  messages: [],
  isLoading: true,
  input: '',
};

export const { selectChatState, selectSelectedDialog, reducer } = createFeature({
  name: CHAT_KEY,
  reducer: createReducer(
    initialState,
    on(action.setSelectedDialog, (state, { selectedDialog }) => ({
      ...state,
      selectedDialog,
      isLoading: true,
      input: '',
    })),
    on(action.resetSelectedDialog, state => ({
      ...state,
      selectedDialog: null,
      isLoading: true,
      input: '',
    })),
    on(
      action.setInput,
      (state, { input }): ChatState => ({
        ...state,
        input,
      }),
    ),
    on(
      action.setSelectedDialogSuccess,
      (state, { messages }): ChatState => ({
        ...state,
        messages,
        isLoading: false,
      }),
    ),
    on(
      action.setSelectedDialogFail,
      (state): ChatState => ({ ...state, messages: [], isLoading: false }),
    ),
  ),
});
