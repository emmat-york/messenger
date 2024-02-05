import {chatReducer, ChatState} from "./chat/chat.reducer";
import {ActionReducer} from "@ngrx/store";
import {userReducer, UserState} from "./user/user.reducer";
import {settingsReducer, SettingsState} from "./settings/settings.reducer";

export enum StoreKey {
  Chat = 'chat',
  User = 'user',
  Settings = 'settings',
}

interface AppStore {
  [StoreKey.Chat]: ActionReducer<ChatState>;
  [StoreKey.User]: ActionReducer<UserState>;
  [StoreKey.Settings]: ActionReducer<SettingsState>;
}

export const appStore: AppStore = {
  [StoreKey.Chat]: chatReducer,
  [StoreKey.User]: userReducer,
  [StoreKey.Settings]: settingsReducer,
};
