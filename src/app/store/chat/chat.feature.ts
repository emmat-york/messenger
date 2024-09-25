import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './chat.action';
import { Message } from '../../pages/messenger/chat/chat.interface';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

export const CHAT_KEY = 'chat';

export interface ChatState {
  input: string;
  messages: Message[];
  isLoading: boolean;
  selectedDialog: Dialog | EssentialUserData | null;
}

// Контакт - это EssentialUserData, а диалог - это юзер, с которым у меня есть диалог

const initialState: ChatState = {
  input: '',
  messages: [],
  isLoading: true,
  selectedDialog: null,
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
