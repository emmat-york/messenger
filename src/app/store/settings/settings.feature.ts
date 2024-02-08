import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './settings.action';

export type AppTheme = 'dark-app-theme' | 'light-app-theme';

interface State {
  theme: AppTheme;
}

const initialState: State = {
  theme: 'dark-app-theme',
};

const reducer = createReducer(
  initialState,
  on(
    action.setTheme,
    (state, { theme }): State => ({
      ...state,
      theme,
    }),
  ),
);

export const settingsFeature = createFeature({
  name: 'settingsFeatureKey',
  reducer,
});

export const { selectTheme } = settingsFeature;
