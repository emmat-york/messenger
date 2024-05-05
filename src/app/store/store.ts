import { reducer as userReducer, UserState } from './user/user.feature';
import { ChatState, reducer as chatReducer } from './chat/chat.feature';
import {
  reducer as settingsReducer,
  SettingsState,
} from './settings/settings.feature';
import { ActionReducer } from '@ngrx/store';

export enum StoreKey {
  User = 'userFeatureKey',
  Chat = 'chatFeatureKey',
  Settings = 'settingsFeatureKey',
}

export interface Store {
  [StoreKey.User]: ActionReducer<UserState>;
  [StoreKey.Chat]: ActionReducer<ChatState>;
  [StoreKey.Settings]: ActionReducer<SettingsState>;
}

export const store: Store = {
  [StoreKey.User]: userReducer,
  [StoreKey.Chat]: chatReducer,
  [StoreKey.Settings]: settingsReducer,
};
