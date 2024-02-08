import { createFeature, createReducer } from '@ngrx/store';

interface State {}

const initialState: State = {};

const reducer = createReducer(initialState);

export const userFeature = createFeature({
  name: 'userFeatureKey',
  reducer,
});
