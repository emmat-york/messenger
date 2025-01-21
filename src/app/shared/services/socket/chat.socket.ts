import { DestroyRef, Injectable, OnDestroy } from '@angular/core';
import { Message, MessageToSend } from '../../../pages/messenger/chat/chat.interface';
import { Subject } from 'rxjs';
import { Dialog } from '../api/chat/chat-service.interface';
import { SoundService } from '../app/sound/sound.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { messageTypeGuard } from './chat-socket.util';
import { SettingsFacade } from '../../../store/settings/settings.facade';
import { concatLatestFrom } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class ChatSocket implements OnDestroy {
  private readonly eventSource$ = new Subject<Message | Dialog>();

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly soundService: SoundService,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnDestroy(): void {
    this.eventSource$.complete();
  }

  init(): void {
    this.eventSource$
      .pipe(
        concatLatestFrom(() => this.settingsFacade.isNotificationSoundOn$),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(([messageOrDialog, isNotificationSoundOn]) => {
        if (messageTypeGuard(messageOrDialog)) {
          this.chatFacade.setMessage({ message: messageOrDialog });
        } else {
        }

        if (isNotificationSoundOn) {
          this.soundService.play();
        }
      });
  }

  request(message: MessageToSend): void {
    this.eventSource$.next({
      ...message,
      roomId: message.roomId ?? Math.random(),
      id: Math.random(),
    });
  }
}
