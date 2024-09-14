import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './user.action';

export const USER_KEY = 'user';

export interface UserStoreState {
  essentialData: EssentialUserData | null;
  avatar: string | null;
}

interface EssentialUserData {
  name: string;
  id: number;
}

const initialState: UserStoreState = {
  essentialData: null,
  avatar: null,
};

export const { selectUserState, reducer } = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUser, (state, { payload: { essentialData, avatar } }) => ({
      ...state,
      essentialData,
      avatar,
    })),
  ),
});
