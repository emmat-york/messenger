import { ActionReducer } from '@ngrx/store';
import { Keys } from './enums/store.enums';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { userReducer, UserState } from './reducers/user.reducer';

interface AppStore {
  [Keys.Auth]: ActionReducer<AuthState>;
  [Keys.User]: ActionReducer<UserState | undefined>;
}

export const appStore: AppStore = {
  [Keys.Auth]: authReducer,
  [Keys.User]: userReducer,
};
