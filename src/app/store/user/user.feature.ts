import {createFeature, createReducer} from "@ngrx/store";

interface UserState {}

const initialState: UserState = {};

const reducer = createReducer(initialState);

export const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer,
});
