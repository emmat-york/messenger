import { Injectable } from '@angular/core';
import { AppTheme, selectTheme, selectVersion } from './settings.feature';
import * as action from './settings.action';
import { BaseStoreFacade } from '../base-store-facade';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade extends BaseStoreFacade {
  readonly version$ = this.store.select(selectVersion);
  readonly theme$ = this.store.select(selectTheme);

  setTheme(theme: AppTheme): void {
    this.dispatch(action.setTheme({ theme }));
  }
}
