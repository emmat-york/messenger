import { Injectable } from '@angular/core';
import { AppMode, selectVersions, SettingsState } from './settings.feature';
import * as action from './settings.action';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Version } from '../user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  readonly versions$: Observable<Version[]> = this.store.select(selectVersions);

  constructor(private readonly store: Store) {}

  setSettings(settings: SettingsState): void {
    this.dispatch(action.setSettings({ settings }));
  }

  setTheme(theme: AppMode): void {
    this.dispatch(action.setTheme({ theme }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
