import { Injectable } from '@angular/core';
import {
  selectIsNightMode,
  selectIsNotificationSoundOn,
  selectSelectedLanguage,
  selectVersions,
  UserSettingsStoreState,
} from './settings.feature';
import { filter, Observable } from 'rxjs';
import { Version } from '../../shared/services/api/user/user-service.interface';
import * as action from './settings.action';
import { resetSettingsReducer } from './settings.action';
import { BaseStoreExtension } from '../base-store-extension';
import { Language } from '../../shared/enums/languages.enum';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade extends BaseStoreExtension {
  readonly versions$: Observable<Version[]> = this.store
    .select(selectVersions)
    .pipe(filter(versions => Boolean(versions.length)));
  readonly selectSelectedLanguage$: Observable<Language> =
    this.store.select(selectSelectedLanguage);
  readonly isNightMode$: Observable<boolean> = this.store.select(selectIsNightMode);
  readonly isNotificationSoundOn$: Observable<boolean> = this.store.select(
    selectIsNotificationSoundOn,
  );

  setUserSettings(payload: UserSettingsStoreState) {
    this.dispatch(action.setUserSettings({ payload }));
  }

  setNightMode(isNightMode: boolean): void {
    this.dispatch(action.setIsNightMode({ isNightMode }));
  }

  setNotificationSoundState(isNotificationSoundOn: boolean): void {
    this.dispatch(action.setNotificationSoundState({ isNotificationSoundOn }));
  }

  resetSettingsReducer(): void {
    this.dispatch(resetSettingsReducer());
  }
}
