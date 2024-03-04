import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { UserFacade } from '../user/user.facade';
import { ChatFacade } from './chat.facade';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import * as action from './chat.action';

@Injectable()
export class ChatEffect {
  constructor(
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly actions$: Actions,
  ) {}

  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.sendMessage),
      concatLatestFrom(() => [
        this.chatFacade.chatVM$,
        this.userFacade.userVM$,
      ]),
      map(([_, { input }, { userData, selectedContact }]) => {
        if (!userData || !selectedContact) {
          return action.unauthorized();
        }

        // this.socketService.sendMessage({
        //   userId: userData.id,
        //   roomId: selectedContact.roomId,
        //   userName: userData.userName,
        //   creationDate: new Date(),
        //   editDate: null,
        //   message: input,
        //   likes: [],
        // });

        return action.resetInput();
      }),
    );
  });
}
