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
      ofType(userAction.setSelectedContact),
      switchMap(({ selectedContact }) => {
        if (!selectedContact) {
          return EMPTY;
        }

        return this.chatService.getChatHistoryByRoomId$(selectedContact.roomId);
      }),
      catchError(() => {
        return throwError(() => '');
      }),
      map(messages => action.setMessagesHistory({ messages })),
    );
  });
}
