import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotificationService } from '../../shared/services/app/notification/notification.service';
import { UserFacade } from '../user/user.facade';
import { ChatFacade } from './chat.facade';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, switchMap, throwError } from 'rxjs';
import { ChatService } from '../../shared/services/app/chat/chat.service';
import * as action from './chat.action';
import * as userAction from '../user/user.action';

@Injectable()
export class ChatEffect {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly chatService: ChatService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
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
        this.notificationService.error('');

        return throwError(() => '');
      }),
      map(messages => action.setMessagesHistory({ messages })),
    );
  });
}
