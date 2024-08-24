import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './settings.action';
import { Version } from '../user/user.interface';

export const SETTINGS_KEY = 'settings';

export type AppMode = 'night-app-mode' | 'day-app-mode';

export interface SettingsState {
  theme: AppMode;
  versions: Version[];
  isNotificationSoundOn: boolean;
  languages: string[];
  selectedLanguage: string;
}

const initialState: SettingsState = {
  theme: 'day-app-mode',
  versions: [],
  isNotificationSoundOn: true,
  languages: [],
  selectedLanguage: '',
};

export const { selectVersions, reducer } = createFeature({
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
