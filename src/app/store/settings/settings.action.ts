import { createAction, props } from '@ngrx/store';
import { UserSettingsStoreState } from './settings.feature';

export const setUserSettings = createAction(
  '[SETTINGS] setUserSettings',
  props<{ payload: UserSettingsStoreState }>(),
);
export const setIsNightMode = createAction(
  '[SETTINGS] setIsNightMode',
  props<{ isNightMode: boolean }>(),
);
export const setIsNightModeSuccess = createAction(
  '[SETTINGS] setIsNightModeSuccess',
  props<{ isNightMode: boolean }>(),
);
export const setIsNightModeFail = createAction('[SETTINGS] setIsNightModeFail');

export const setNotificationSoundState = createAction(
  '[SETTINGS] setNotificationSoundState',
  props<{
    isNotificationSoundOn: boolean;
  }>(),
);
export const setNotificationSoundStateSuccess = createAction(
  '[SETTINGS] setNotificationSoundStateSuccess',
  props<{
    isNotificationSoundOn: boolean;
  }>(),
);
export const setNotificationSoundStateFail = createAction(
  '[SETTINGS] setNotificationSoundStateFail',
);
