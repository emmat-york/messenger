import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserFacade } from '../../store/user/user.facade';
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
  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
  ) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    this.userFacade.setSelectedDialog(null);
    this.chatFacade.setInput('');
  }
}
