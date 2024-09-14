import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './chat.action';
import { Message } from '../../pages/messenger/chat/chat.interface';
import { Dialog } from '../../shared/services/api/chat/chat-service.interface';

export const CHAT_KEY = 'chat';

export interface ChatState {
  input: string;
  messages: Message[];
  dialogs: Dialog[];
  selectedDialog: Dialog | null;
  isLoading: boolean;
}

const initialState: ChatState = {
  input: '',
  messages: [],
  dialogs: [],
  selectedDialog: null,
  isLoading: true,
};

export const { selectChatState, reducer } = createFeature({
  name: CHAT_KEY,
  reducer: createReducer(
    initialState,
    on(action.setDialogs, (state, { dialogs }): ChatState => ({ ...state, dialogs })),
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
    on(action.setMessage, (state, { message, dialogId, withInputReset }) => ({
      ...state,
      messages: [...state.messages, message],
      input: withInputReset ? '' : state.input,
      dialogs: state.dialogs.map(dialog => {
        if (dialog.id === dialogId) {
          return {
            ...dialog,
            lastMessage: message,
          };
        }

        return dialog;
      }),
    })),
  ),
});
