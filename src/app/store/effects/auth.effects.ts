import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiService } from '../../shared/services/api/auth.service';
import { map, switchMap } from 'rxjs';
import * as actions from '../actions/auth.actions';
import { SignInKey } from '../../pages/sign-in/enums/sign-in.enums';

@Injectable()
export class AuthEffects {
  singUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signUpRequest),
      switchMap(() => {
        return this.authApiService.signUp$({
          [SignInKey.Login]: '',
          [SignInKey.Password]: '',
        });
      }),
      map(() => {
        return actions.signUpResponse();
      }),
    );
  });

  singIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signInRequest),
      switchMap(() => {
        return this.authApiService.singIn$({
          [SignInKey.Login]: '',
          [SignInKey.Password]: '',
        });
      }),
      map(() => {
        return actions.signInResponse();
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
        return actions.signOutResponse();
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
  ) {}
}
