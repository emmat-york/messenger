import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiService } from '../../shared/services/api/auth/auth-api.service';
import { UserFacade } from '../user/user.facade';
import { AppRoutes } from '../../routing/enums/routing.enum';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import * as actions from './auth.actions';

@Injectable()
export class AuthEffects {
  singUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signUpRequest),
      switchMap(({ credentials }) => this.authApiService.signUp$(credentials)),
      map(userState => {
        this.userFacade.setUserState(userState);
        this.router.navigate([AppRoutes.messenger]);
        return actions.signUpResponse({ response: {} });
      }),
    );
  });

  singIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signInRequest),
      switchMap(({ credentials }) => this.authApiService.singIn$(credentials)),
      map(userData => {
        this.userFacade.setUserState(userData);
        this.router.navigate([AppRoutes.messenger]);
        return actions.signInResponse({ response: {} });
      }),
    );
  });

  singOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signOutRequest),
      switchMap(() => this.authApiService.singOut$()),
      map(() => {
        return actions.signOutResponse({ response: {} });
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
    private userFacade: UserFacade,
    private router: Router,
  ) {}
}
