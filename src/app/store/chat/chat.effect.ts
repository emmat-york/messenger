import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { ChatService } from '../../shared/services/api/chat/chat.service';
import * as action from './chat.action';
import { ChatFacade } from './chat.facade';
import { UserFacade } from '../user/user.facade';
import { ChatSocket } from '../../shared/services/socket/chat.socket';
import { SoundService } from '../../shared/services/app/sound/sound.service';
import { Message } from '../../pages/messenger/chat/chat.interface';

@Injectable()
export class ChatEffect {
  constructor(
    private readonly soundService: SoundService,
    private readonly chatService: ChatService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly chatSocket: ChatSocket,
    private readonly actions$: Actions,
  ) {}

  setSelectedDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.setSelectedDialog),
      filter(({ selectedDialog: { roomId } }) => Boolean(roomId)),
      switchMap(({ selectedDialog }) => {
        return this.chatService.getChatHistoryByRoomId$(selectedDialog.roomId);
      }),
      map(messages => action.setSelectedDialogSuccess({ messages })),
      catchError(() => of(action.setSelectedDialogFail())),
    );
  });

  sendMessage$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(action.sendMessage),
        concatLatestFrom(() => [this.chatFacade.vm$, this.userFacade.vm$]),
      )
      .pipe(
        map(([, chatVm, { essentialData }]) => {
          if (!essentialData || !chatVm.selectedDialog) {
            throw new Error('Impossible to send message.');
          }

          const message: Message = {
            id: 11111123334,
            uuid: essentialData.id,
            message: chatVm.input,
            userName: essentialData.name,
            creationDate: new Date().toUTCString(),
            editDate: null,
            likes: [],
          };

          this.chatSocket.request(message, chatVm.selectedDialog.roomId);
          this.soundService.play();

          return action.setMessage({
            message,
            dialogId: chatVm.selectedDialog.id,
            withInputReset: true,
          });
        }),
        catchError(() => of(action.sendMessageFail())),
      );
  });
}
