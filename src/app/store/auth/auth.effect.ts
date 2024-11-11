import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from './auth.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthUserService } from '../../shared/services/app/auth-user/auth-user.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly authUserService: AuthUserService,
    private readonly authService: AuthService,
    private readonly actions$: Actions,
  ) {}

  logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.logOut),
      switchMap(() => {
        return this.authService.logOut$().pipe(
          map(() => {
            this.authUserService.logOut();
            return action.logOutSuccess();
          }),
          catchError(() => of(action.logOutFail())),
        );
      }),
    );
  });
}
