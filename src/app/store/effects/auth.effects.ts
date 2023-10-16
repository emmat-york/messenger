import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiService } from '../../shared/services/api/auth.service';
import { map, switchMap } from 'rxjs';
import { SignInKeys } from '../../pages/sign-in/enums/sign-in.enums';
import * as actions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  singUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signUpRequest),
      switchMap(() => {
        return this.authApiService.signUp$({
          [SignInKeys.Login]: '',
          [SignInKeys.Password]: '',
        });
      }),
      map(() => {
        return actions.signUpResponse({ response: {} });
      }),
    );
  });

  singIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signInRequest),
      switchMap(() => {
        return this.authApiService.singIn$({
          [SignInKeys.Login]: '',
          [SignInKeys.Password]: '',
        });
      }),
      map(() => {
        return actions.signInResponse({ response: {} });
      }),
    );
  });

  singOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signOutRequest),
      switchMap(() => {
        return this.authApiService.singOut$();
      }),
      map(() => {
        return actions.signOutResponse({ response: {} });
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
  ) {}
}
