import {createReducer} from "@ngrx/store";

export interface SettingsState {

}

const INITIAL_STATE: SettingsState = {

};

export const settingsReducer = createReducer(INITIAL_STATE);
