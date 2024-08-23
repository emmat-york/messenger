import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './settings.action';

export const SETTINGS_KEY = 'settings';

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
  version: '1.0.0',
  isNotificationSoundOn: true,
  languages: [],
  selectedLanguage: '',
};

export const { selectTheme, selectVersion, reducer } = createFeature({
  name: SETTINGS_KEY,
  reducer: createReducer(
    initialState,
    on(
      action.setSettings,
      (state, { settings }): SettingsState => ({ ...state, ...settings }),
    ),
    on(
      action.setTheme,
      (state, { theme }): SettingsState => ({
        ...state,
        theme,
      }),
    ),
  ),
});
