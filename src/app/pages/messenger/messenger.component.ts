import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ChatFacade } from '../../store/chat/chat.facade';
import { ModalService } from '../../shared/services/app/modal/modal.service';
import { ChatComponent } from './chat/chat.component';
import { AsideComponent } from './aside/aside.component';
import { ChatSocket } from '../../shared/services/socket/chat.socket';
import { DOCUMENT } from '@angular/common';
import { SettingsFacade } from '../../store/settings/settings.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  providers: [ChatSocket],
  imports: [ChatComponent, AsideComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly settingsFacade: SettingsFacade,
    private readonly modalService: ModalService,
    private readonly chatSocket: ChatSocket,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngOnInit(): void {
    this.chatSocket.init();
    this.subscribeToAppTheme();
  }

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    if (this.modalService.hasOpenedModal) {
      return;
    }

    this.chatFacade.resetSelectedDialog();
  }

  private subscribeToAppTheme(): void {
    this.settingsFacade.isNightMode$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isNightMode => {
        this.renderer2.setAttribute(
          this.document.body,
          'mode',
          isNightMode ? 'night' : 'day',
        );
      });
  }
}
