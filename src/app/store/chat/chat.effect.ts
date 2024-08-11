import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { ChatService } from '../../shared/services/api/chat/chat.service';
import * as action from './chat.action';
import * as userAction from '../user/user.action';
import { ChatFacade } from './chat.facade';
import { UserFacade } from '../user/user.facade';
import { ChatSocket } from '../../shared/services/socket/chat/chat.socket';
import { Message } from '../../pages/messenger/components/chat/interfaces/chat.interface';

@Injectable()
export class ChatEffect {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly chatSocket: ChatSocket,
    private readonly actions$: Actions,
  ) {}

  getChatHistoryByRoomId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userAction.setSelectedDialog),
      switchMap(({ selectedDialog }) => {
        if (!selectedDialog) {
          return EMPTY;
        }

        return this.chatService.getChatHistoryByRoomId$(selectedDialog.roomId);
      }),
      map(messages => action.setMessagesHistorySuccess({ messages })),
      catchError(() => of(action.setMessagesHistoryFail())),
    );
  });

  sendMessage$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(action.sendMessage),
        concatLatestFrom(() => [this.chatFacade.vm$, this.userFacade.vm$]),
      )
      .pipe(
        map(([, chatVm, userVm]) => {
          const message: Message = {
            id: 11111123334,
            uuid: userVm.userData!.id,
            message: chatVm.input,
            userName: userVm.userData!.userName,
            roomId: userVm.selectedDialog!.roomId,
            creationDate: '01-01-2020',
            editDate: null,
            likes: [],
          };

          this.chatSocket.request(message, userVm.selectedDialog!.roomId);

          return action.setMessage({ message, withInputReset: true });
        }),
      );
  });

  // getMessage$ = createEffect(() => {
  //   return this.actions$.pipe();
  // });
}
