import { createFeature, createReducer, on } from '@ngrx/store';
import { Version } from '../../shared/services/api/user/user-service.interface';
import * as action from './settings.action';

export const SETTINGS_KEY = 'settings';

export interface UserSettingsStoreState {
  theme: string;
  versions: Version[];
  isNotificationSoundOn: boolean;
  languages: string[];
  selectedLanguage: string;
}

const initialState: UserSettingsStoreState = {} as UserSettingsStoreState;

export const { reducer, selectVersions } = createFeature({
  name: SETTINGS_KEY,
  reducer: createReducer(
    initialState,
    on(
      action.setUserSettings,
      (state, { payload }): UserSettingsStoreState => ({
        ...state,
        isNotificationSoundOn: payload.isNotificationSoundOn,
        selectedLanguage: payload.selectedLanguage,
        languages: payload.languages,
        versions: payload.versions,
        theme: payload.theme,
      }),
    ),
  ),
});
