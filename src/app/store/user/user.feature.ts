import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './user.action';

export const USER_KEY = 'user';

export interface UserStoreState {
  id: number;
  name: string;
  avatar: string | null;
}

const initialState: UserStoreState = {} as UserStoreState;

export const { selectUserState, reducer } = createFeature({
  name: USER_KEY,
  reducer: createReducer(
    initialState,
    on(action.setUser, (state, { payload: { id, avatar, name } }) => ({
      ...state,
      id,
      avatar,
      name,
    })),
  ),
});
