import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, switchMap, throwError } from 'rxjs';
import { ChatService } from '../../shared/services/api/chat/chat.service';
import * as action from './chat.action';
import * as userAction from '../user/user.action';

@Injectable()
export class ChatEffect {
  constructor(
    private readonly chatService: ChatService,
    private readonly actions$: Actions,
  ) {}

  requestChatHistoryByRoomId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userAction.setSelectedDialog),
      switchMap(({ selectedDialog }) => {
        if (!selectedDialog) {
          return EMPTY;
        }

        return this.chatService.getChatHistoryByRoomId$(selectedDialog.roomId);
      }),
      catchError(() => {
        return throwError(() => '');
      }),
      map(messages => action.setMessagesHistory({ messages })),
    );
  });
}
