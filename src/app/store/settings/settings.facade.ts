import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {AppTheme, selectTheme} from "./settings.feature";
import * as action from './settings.action';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  theme$ = this.store.select(selectTheme);

  constructor(private readonly store: Store) {}

  setTheme(theme: AppTheme): void {
    this.dispatch(action.setTheme({ theme }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
