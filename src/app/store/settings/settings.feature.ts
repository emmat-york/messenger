import {createFeature, createReducer} from "@ngrx/store";

interface SettingsState {}

const initialState: SettingsState = {};

const reducer = createReducer(initialState);

export const settingsFeature = createFeature({
  name: 'settingsFeatureKey',
  reducer,
});
