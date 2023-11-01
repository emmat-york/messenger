import { DestroyRef, Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiService } from '../../shared/services/api/auth/auth-api.service';
import { UserFacade } from '../../shared/services/facade/user.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppRoutes } from '../../routing/enums/routing.enums';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import * as actions from '../actions/auth.actions';

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
      takeUntilDestroyed(this.destroyRef),
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
      takeUntilDestroyed(this.destroyRef),
    );
  });

  singOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.signOutRequest),
      switchMap(() => this.authApiService.singOut$()),
      map(() => {
        return actions.signOutResponse({ response: {} });
      }),
      takeUntilDestroyed(this.destroyRef),
    );
  });

  constructor(
    @Inject(DestroyRef) private destroyRef: DestroyRef,
    private actions$: Actions,
    private authApiService: AuthApiService,
    private userFacade: UserFacade,
    private router: Router,
  ) {}
}
