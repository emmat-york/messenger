import { createReducer, on } from "@ngrx/store";
import * as actions from '../actions/auth.actions';

export interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
};

export const authReducer = createReducer(
    initialState,
    on(actions.signUpResponse, (state) => ({
        ...state,
        isAuth: true,
    })),
    on(actions.signInResponse, (state) => ({
        ...state,
        isAuth: true,
    })),
    on(actions.signOutResponse, (state) => ({
        ...state,
        isAuth: false,
    })),
);
