import {createFeature, createReducer} from "@ngrx/store";

interface State {}

const initialState: State = {};

const reducer = createReducer(initialState);

export const settingsFeature = createFeature({
  name: 'settingsFeatureKey',
  reducer,
});
