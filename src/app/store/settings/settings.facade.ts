import { Injectable } from '@angular/core';
import { AppTheme, selectTheme } from './settings.feature';
import * as action from './settings.action';
import { BaseStoreFacade } from '../utils/base-store-facade';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade extends BaseStoreFacade {
  readonly theme$ = this.store.select(selectTheme);

  setTheme(theme: AppTheme): void {
    this.dispatch(action.setTheme({ theme }));
  }
}
