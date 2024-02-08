import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from './chat.action';

@Injectable()
export class ChatEffect {
  constructor(
    private actions$: Actions,
    private readonly store: Store,
  ) {}

  // sendMessage$ = createEffect(() => this.actions$.pipe(ofType(action.sendMessage)));
}
