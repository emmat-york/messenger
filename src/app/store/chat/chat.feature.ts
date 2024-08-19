import { createFeature, createReducer, on } from '@ngrx/store';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';
import * as action from './chat.action';
import { CHAT_KEY } from '../store.constant';
import { Dialog } from '../user/user.interface';

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

const chatFeature = createFeature({
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
    on(action.setMessage, (state, { message, roomId, withInputReset }) => ({
      ...state,
      messages: [...state.messages, message],
      input: withInputReset ? '' : state.input,
      dialogs: state.dialogs.map(dialog => {
        if (dialog.roomId === roomId) {
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

export const { selectChatState, reducer } = chatFeature;
