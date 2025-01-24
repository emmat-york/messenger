import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ChatFacade } from '../../store/chat/chat.facade';
import { ModalService } from '../../shared/services/app/modal/modal.service';
import { ChatComponent } from './chat/chat.component';
import { AsideComponent } from './aside/aside.component';
import { ChatSocket } from '../../shared/services/socket/chat.socket';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  imports: [ChatComponent, AsideComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent implements OnInit, OnDestroy {
  constructor(
    private readonly modalService: ModalService,
    private readonly chatSocket: ChatSocket,
    private readonly chatFacade: ChatFacade,
  ) {}

  ngOnInit(): void {
    this.chatSocket.init();
  }

  ngOnDestroy(): void {
    this.chatSocket.disconnect();
  }

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    if (this.modalService.hasOpenedModal) {
      return;
    }

    this.chatFacade.resetSelectedDialog();
  }
}
