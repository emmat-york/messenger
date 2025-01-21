import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { ChatService } from '../../shared/services/api/chat/chat.service';
import * as action from './chat.action';
import { ChatFacade } from './chat.facade';
import { UserFacade } from '../user/user.facade';
import { ChatSocket } from '../../shared/services/socket/chat.socket';
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

  sendMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(action.sendMessage),
        concatLatestFrom(() => [this.chatFacade.vm$, this.userFacade.vm$]),
        map(([, chatVm, userVm]) => {
          if (!userVm.essentialData || !chatVm.selectedDialog) {
            throw new Error('Impossible to send message. There is user data!');
          }

          this.chatSocket.request({
            uuid: userVm.essentialData.id,
            roomId: dialogTypeGuard(chatVm.selectedDialog)
              ? chatVm.selectedDialog.roomId
              : null,
            message: chatVm.input,
            userName: userVm.essentialData.name,
            creationDate: new Date().toUTCString(),
            editDate: null,
            likes: [],
          });
        }),
      );
    },
    { dispatch: false },
  );

  constructor(
    private readonly chatService: ChatService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly chatSocket: ChatSocket,
    private readonly actions$: Actions,
  ) {}
}
