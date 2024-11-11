import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import {
  selectIsNightMode,
  selectVersions,
  UserSettingsStoreState,
} from './settings.feature';
import { Observable } from 'rxjs';
import { Version } from '../../shared/services/api/user/user-service.interface';
import * as action from './settings.action';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  readonly versions$: Observable<Version[]> = this.store.select(selectVersions);
  readonly isNightMode$: Observable<boolean> = this.store.select(selectIsNightMode);

  constructor(private readonly store: Store) {}

  setUserSettings(payload: UserSettingsStoreState) {
    this.dispatch(action.setUserSettings({ payload }));
  }

  setNightMode(isNightMode: boolean): void {
    this.dispatch(action.setIsNightMode({ isNightMode }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
