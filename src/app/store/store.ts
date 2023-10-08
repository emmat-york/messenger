import { Keys } from "./enums/store.enums";
import { authReducer, AuthState } from "./reducers/auth.reducer";
import { ActionReducer } from "@ngrx/store";

interface AppStore {
    [Keys.Auth]: ActionReducer<AuthState>;
}

export const appStore: AppStore = {
    [Keys.Auth]: authReducer,
};
