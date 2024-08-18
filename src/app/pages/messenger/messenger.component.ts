import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatFacade } from '../../store/chat/chat.facade';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  imports: [DialogsComponent, ChatComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent {
  constructor(private readonly chatFacade: ChatFacade) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    this.chatFacade.resetSelectedDialog();
  }
}
