import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ChatFacade } from '../../store/chat/chat.facade';
import { ModalService } from '../../shared/services/app/modal/modal.service';
import { ChatComponent } from './chat/chat.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
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
