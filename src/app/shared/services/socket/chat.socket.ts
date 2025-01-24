import { DestroyRef, Injectable, OnDestroy } from '@angular/core';
import { Message, MessageToSend } from '../../../pages/messenger/chat/chat.interface';
import { Subject, takeUntil } from 'rxjs';
import { Dialog } from '../api/chat/chat-service.interface';
import { SoundService } from '../app/sound/sound.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { messageTypeGuard } from './chat-socket.util';
import { SettingsFacade } from '../../../store/settings/settings.facade';
import { concatLatestFrom } from '@ngrx/effects';
import { UserFacade } from '../../../store/user/user.facade';

@Injectable({
  providedIn: 'root',
})
export class ChatSocket implements OnDestroy {
  private readonly eventSource$ = new Subject<Message | Dialog>();
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly soundService: SoundService,
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnDestroy(): void {
    this.eventSource$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

  init(): void {
    this.eventSource$
      .pipe(
        concatLatestFrom(() => [
          this.settingsFacade.isNotificationSoundOn$,
          this.chatFacade.selectedDialog$,
        ]),
        takeUntil(this.destroy$),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(([messageOrDialog, isNotificationSoundOn, selectedDialog]) => {
        if (isNotificationSoundOn) {
          this.soundService.play();
        }

        if (messageTypeGuard(messageOrDialog)) {
          const currentDialog = selectedDialog as Dialog | null; // Message can only be added to existing dialog
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

  disconnect(): void {
    this.destroy$.next();
  }

  request(message: MessageToSend): void {
    this.eventSource$.next({
      ...message,
      roomId: message.roomId ?? Math.random(),
      id: Math.random(),
    });
  }
}
