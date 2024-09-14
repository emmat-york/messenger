import { createAction, props } from '@ngrx/store';
import { UserSettingsStoreState } from './settings.feature';

export const setUserSettings = createAction(
  '[SETTINGS] setUserSettings',
  props<{ payload: UserSettingsStoreState }>(),
);
