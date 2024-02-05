import {createFeature, createReducer} from "@ngrx/store";

interface State {
  theme: 'dark' | 'light';
}

const initialState: State = {
  theme: 'dark',
};

const reducer = createReducer(initialState);

export const settingsFeature = createFeature({
  name: 'settingsFeatureKey',
  reducer,
});

export const { selectTheme } = settingsFeature;
