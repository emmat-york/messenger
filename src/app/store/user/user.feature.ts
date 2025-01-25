import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './user.action';
import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

export const USER_KEY = 'user';

export interface UserStoreState {
  essentialData: EssentialUserData | null;
  dialogs: Dialog[];
  contacts: EssentialUserData[];
}

const initialState: UserStoreState = {
  essentialData: null,
  dialogs: [],
  contacts: [],
};

export const { selectContacts, selectEssentialData, selectDialogs, reducer } =
  createFeature({
    name: USER_KEY,
    reducer: createReducer(
      initialState,
      on(
        action.setUser,
        (state, { payload: { essentialData, dialogs, contacts } }): UserStoreState => ({
          ...state,
          essentialData,
          dialogs,
          contacts,
        }),
      ),
      on(
        action.updateDialogLastMessage,
        (state, { message }): UserStoreState => ({
          ...state,
          dialogs: state.dialogs.map(dialog => {
            if (dialog.roomId === message.roomId) {
              return {
                ...dialog,
                lastMessage: message,
              };
            }

            return dialog;
          }),
        }),
      ),
      on(action.resetUserReducer, (): UserStoreState => ({ ...initialState })),
    ),
  });
