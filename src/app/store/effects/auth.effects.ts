import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthApiService } from "../../shared/services/api/auth.service";
import { map, switchMap } from "rxjs";
import * as actions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    singUp$ = createEffect(() => this.actions$.pipe(
        ofType(actions.signUpRequest),
        switchMap(() => {
            return this.authApiService.signUp$({});
        }),
        map(() => {
            return actions.signUpResponse();
        })));

    singIn$ = createEffect(() => this.actions$.pipe(
        ofType(actions.signInRequest),
        switchMap(() => {
            return this.authApiService.singIn$({});
        }),
        map(() => {
        return actions.signInResponse();
    })));

    singOut$ = createEffect(() => this.actions$.pipe(
        ofType(actions.signOutRequest),
        switchMap(() => {
            return this.authApiService.singOut$();
        }),
        map(() => {
        return actions.signOutResponse();
    })));

    constructor(private actions$: Actions, private authApiService: AuthApiService) {}
}
