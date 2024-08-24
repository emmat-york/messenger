import { createAction, props } from '@ngrx/store';
import { AppMode, SettingsState } from './settings.feature';

export const setSettings = createAction(
  '[SETTINGS setSettings]',
  props<{ settings: SettingsState }>(),
);
export const setTheme = createAction('[SETTINGS setTheme]', props<{ theme: AppMode }>());
