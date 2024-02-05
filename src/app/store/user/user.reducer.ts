import {createReducer} from "@ngrx/store";

export interface UserState {

}

const INITIAL_STATE: UserState = {

};

export const userReducer = createReducer(INITIAL_STATE);
