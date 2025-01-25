import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { ChatService } from '../../shared/services/api/chat/chat.service';
import * as action from './chat.action';
import { dialogTypeGuard } from './chat.util';

@Injectable()
export class ChatEffect {
  setSelectedDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.setSelectedDialog),
      switchMap(({ selectedDialog }) => {
        return dialogTypeGuard(selectedDialog)
          ? this.chatService.getChatHistoryByRoomId$(selectedDialog.roomId).pipe(
              map(messages => action.setSelectedDialogSuccess({ messages })),
              catchError(() => of(action.setSelectedDialogFail())),
            )
          : of(action.setSelectedDialogSuccess({ messages: [] }));
      }),
    );
  });

  constructor(
    private readonly chatService: ChatService,
    private readonly actions$: Actions,
  ) {}
}
