import {createAction, props} from "@ngrx/store";
import {AppTheme} from "./settings.feature";

export const setTheme = createAction('[SETTINGS setTheme]', props<{ theme: AppTheme }>());
