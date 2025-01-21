import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from './settings.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { SettingsService } from '../../shared/services/api/settings/settings.service';

@Injectable()
export class SettingsEffect {
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

  setNotificationSoundState$ = createEffect(() => {
    return this.actins$.pipe(
      ofType(action.setNotificationSoundState),
      switchMap(({ isNotificationSoundOn }) => {
        return this.settingsService
          .setNotificationSoundState$(isNotificationSoundOn)
          .pipe(
            map(() => action.setNotificationSoundStateSuccess({ isNotificationSoundOn })),
            catchError(() => of(action.setNotificationSoundStateFail())),
          );
      }),
    );
  });

  constructor(
    private readonly settingsService: SettingsService,
    private readonly actins$: Actions,
  ) {}
}
