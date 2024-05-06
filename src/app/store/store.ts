import { reducer as userReducer, UserState } from './user/user.feature';
import { ChatState, reducer as chatReducer } from './chat/chat.feature';
import {
  reducer as settingsReducer,
  SettingsState,
} from './settings/settings.feature';
import { AuthState, reducer as authReducer } from './auth/auth.feature';
import { ActionReducer } from '@ngrx/store';

export interface Store {
  user: ActionReducer<UserState>;
  chat: ActionReducer<ChatState>;
  settings: ActionReducer<SettingsState>;
  auth: ActionReducer<AuthState>;
}

export const store: Store = {
  user: userReducer,
  chat: chatReducer,
  settings: settingsReducer,
  auth: authReducer,
};
