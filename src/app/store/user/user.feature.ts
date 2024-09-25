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
}

const initialState: UserStoreState = {
  essentialData: null,
  dialogs: [],
};

export const { selectUserState, reducer } = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUser, (state, { payload: { essentialData, dialogs } }) => ({
      ...state,
      essentialData,
      dialogs,
    })),
    on(action.updateDialogLastMessage, (state, { lastMessage, roomId }) => ({
      ...state,
      dialogs: state.dialogs.map(dialog => {
        if (dialog.roomId === roomId) {
          return {
            ...dialog,
            lastMessage,
          };
        }

        return dialog;
      }),
    })),
  ),
});
