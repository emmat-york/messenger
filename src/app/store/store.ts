import { ActionReducer } from '@ngrx/store';
import { Keys } from './enums/store.enums';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { userReducer, UserState } from './reducers/user.reducer';
import { chatReducer, ChatState } from './reducers/chat.reducer';

interface AppStore {
  [Keys.Auth]: ActionReducer<AuthState>;
  [Keys.User]: ActionReducer<UserState>;
  [Keys.Chat]: ActionReducer<ChatState>;
}

export const appStore: AppStore = {
  [Keys.Auth]: authReducer,
  [Keys.User]: userReducer,
  [Keys.Chat]: chatReducer,
};
