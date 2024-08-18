import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './settings.action';
import { SETTINGS_KEY } from '../constants/store.constant';

export type AppTheme = 'dark-app-theme' | 'light-app-theme';

export interface SettingsState {
  theme: AppTheme;
  version: string;
  isNotificationSoundOn: boolean;
  languages: string[];
  selectedLanguage: string;
}

const initialState: SettingsState = {
  theme: 'dark-app-theme',
  version: '',
  isNotificationSoundOn: true,
  languages: [],
  selectedLanguage: '',
};

const feature = createFeature({
  name: SETTINGS_KEY,
  reducer: createReducer(
    initialState,
    on(
      action.setTheme,
      (state, { theme }): SettingsState => ({
        ...state,
        theme,
      }),
    ),
  ),
});

export const { selectTheme, reducer } = feature;
