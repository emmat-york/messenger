import { ActionReducer } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { userReducer, UserState } from './user/user.reducer';
import { chatReducer, ChatState } from './chat/chat.reducer';

export enum Keys {
  Auth = 'auth',
  User = 'user',
  Chat = 'chat',
}

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
