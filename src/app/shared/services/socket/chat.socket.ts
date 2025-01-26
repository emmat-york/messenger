import { DestroyRef, Injectable, OnDestroy } from '@angular/core';
import { Message } from '../../../pages/messenger/chat/chat.interface';
import { combineLatest, Subject, take } from 'rxjs';
import { Dialog } from '../api/chat/chat-service.interface';
import { SoundService } from '../app/sound/sound.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { messageTypeGuard } from './chat-socket.util';
import { SettingsFacade } from '../../../store/settings/settings.facade';
import { concatLatestFrom } from '@ngrx/effects';
import { UserFacade } from '../../../store/user/user.facade';
import { dialogTypeGuard } from '../../../store/chat/chat.util';

@Injectable()
export class ChatSocket implements OnDestroy {
  private readonly eventSource$ = new Subject<Message | Dialog>();

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly soundService: SoundService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnDestroy(): void {
    this.eventSource$.complete();
  }

  init(): void {
    this.eventSource$
      .pipe(
        concatLatestFrom(() => [
          this.settingsFacade.isNotificationSoundOn$,
          this.chatFacade.selectedDialog$,
        ]),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(([messageOrDialog, isNotificationSoundOn, selectedDialog]) => {
        if (isNotificationSoundOn) {
          this.soundService.play();
        }

        if (messageTypeGuard(messageOrDialog)) {
          const currentDialog = selectedDialog as Dialog | null;
          const msgToDialog = messageOrDialog.roomId === currentDialog?.roomId;

          if (msgToDialog) {
            this.chatFacade.setMessage({ message: messageOrDialog });
            this.userFacade.updateDialogLastMessage(messageOrDialog);
          } else {
            this.userFacade.updateDialogLastMessage(messageOrDialog);
          }
        } else {
        }
      });
  }

  sendMessage(): void {
    combineLatest([
      this.chatFacade.input$,
      this.chatFacade.selectedDialog$,
      this.userFacade.essentialData$,
    ])
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(([input, selectedDialog, essentialData]) => {
        if (!essentialData || !selectedDialog) {
          throw new Error('Impossible to send message. There is user data!');
        }

        this.eventSource$.next({
          id: Math.random(),
          roomId: dialogTypeGuard(selectedDialog)
            ? selectedDialog.roomId
            : null ?? Math.random(),
          uuid: essentialData.uuid,
          message: input,
          userName: essentialData.name,
          creationDate: new Date().toUTCString(),
          editDate: null,
          likes: [],
        });
      });
  }
}
