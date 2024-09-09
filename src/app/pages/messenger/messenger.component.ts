import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ChatFacade } from '../../store/chat/chat.facade';
import { ModalService } from '../../shared/services/app/modal/modal.service';
import { ChatComponent } from './chat/chat.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-messenger',
  standalone: true,
  template: `
    <app-aside class="aside"></app-aside>
    <app-chat class="chat"></app-chat>
  `,
  styles: `$dialog-width: 348px;

    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .aside {
      width: $dialog-width;
      min-width: 312px;
    }

    .chat {
      width: calc(100% - #{$dialog-width});
    }`,
  imports: [ChatComponent, AsideComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent {
  constructor(
    private readonly chatFacade: ChatFacade,
    private readonly modalService: ModalService,
  ) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    if (this.modalService.hasOpenedModal) {
      return;
    }

    this.chatFacade.resetSelectedDialog();
  }
}
