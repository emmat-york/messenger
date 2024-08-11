import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Dialog, UserData } from './user.interface';
import * as action from './user.action';
import * as chatAction from '../chat/chat.action';
import { USER_KEY } from '../constants/store.constant';

export interface UserState {
  userData: UserData | null;
  selectedDialog: Dialog | null;
}

const initialState: UserState = {
  userData: null,
  selectedDialog: null,
};

const userFeature = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUserData, (state, { userData }) => ({ ...state, userData })),
    on(action.setSelectedDialog, (state, { selectedDialog }) => ({
      ...state,
      selectedDialog,
    })),
    on(chatAction.setMessage, (state, { message, roomId }) => {
      if (!state.userData) {
        return state;
      }

      return {
        ...state,
        userData: {
          ...state.userData,
          dialogs: state.userData.dialogs.map(dialog => {
            if (dialog.roomId === roomId) {
              return {
                ...dialog,
                lastMessage: message,
              };
            }

            return dialog;
          }),
        },
      };
    }),
  ),
});

export const { selectUserData, selectSelectedDialog, reducer } = userFeature;

export const selectUserVM = createSelector(
  selectUserData,
  selectSelectedDialog,
  (userData, selectedDialog) => ({
    userData,
    selectedDialog,
  }),
);
