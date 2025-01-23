import { createFeature, createReducer, on } from '@ngrx/store';
import { Version } from '../../shared/services/api/user/user-service.interface';
import * as action from './settings.action';

export const SETTINGS_KEY = 'settings';

export interface UserSettingsStoreState {
  isNightMode: boolean;
  versions: Version[];
  isNotificationSoundOn: boolean;
  languages: string[];
  selectedLanguage: string;
}

const initialState: UserSettingsStoreState = {
  isNightMode: false,
  versions: [],
  isNotificationSoundOn: true,
  languages: [],
  selectedLanguage: '',
};

export const { reducer, selectVersions, selectIsNotificationSoundOn, selectIsNightMode } =
  createFeature({
    name: SETTINGS_KEY,
    reducer: createReducer(
      initialState,
      on(
        action.setUserSettings,
        (state, { payload }): UserSettingsStoreState => ({
          ...state,
          isNotificationSoundOn: payload.isNotificationSoundOn,
          selectedLanguage: payload.selectedLanguage,
          isNightMode: payload.isNightMode,
          languages: payload.languages,
          versions: payload.versions,
        }),
      ),
      on(
        action.setIsNightModeSuccess,
        (state, { isNightMode }): UserSettingsStoreState => ({
          ...state,
          isNightMode,
        }),
      ),
      on(
        action.setNotificationSoundStateSuccess,
        (state, { isNotificationSoundOn }): UserSettingsStoreState => ({
          ...state,
          isNotificationSoundOn,
        }),
      ),
      on(
        action.resetSettingsReducer,
        (): UserSettingsStoreState => ({ ...initialState }),
      ),
    ),
  });
