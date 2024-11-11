import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as action from './settings.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { SettingsService } from '../../shared/services/api/settings/settings.service';

@Injectable()
export class SettingsEffect {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly actins$: Actions,
  ) {}

  setIsNightMode$ = createEffect(() => {
    return this.actins$.pipe(
      ofType(action.setIsNightMode),
      switchMap(({ isNightMode }) => {
        return this.settingsService.setIsNightMode$(isNightMode).pipe(
          map(() => action.setIsNightModeSuccess({ isNightMode })),
          catchError(() => of(action.setIsNightModeFail())),
        );
      }),
    );
  });
}
