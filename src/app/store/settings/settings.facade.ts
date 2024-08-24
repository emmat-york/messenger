import { Injectable } from '@angular/core';
import { AppTheme, selectTheme, selectVersion, SettingsState } from './settings.feature';
import * as action from './settings.action';
import { Action, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  readonly version$ = this.store.select(selectVersion);
  readonly theme$ = this.store.select(selectTheme);

  constructor(private readonly store: Store) {}

  setSettings(settings: SettingsState): void {
    this.dispatch(action.setSettings({ settings }));
  }

  setTheme(theme: AppTheme): void {
    this.dispatch(action.setTheme({ theme }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
