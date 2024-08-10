import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserFacade } from '../../store/user/user.facade';
import { take } from 'rxjs';
import { ModalService } from '../../shared/services/app/modal/modal.service';

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
    private readonly modalService: ModalService,
    private readonly userFacade: UserFacade,
  ) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    if (this.modalService.isModalOpened) {
      return;
    }

    this.userFacade.vm$.pipe(take(1)).subscribe(({ selectedDialog }) => {
      if (!selectedDialog) {
        return;
      }

      this.userFacade.setSelectedDialog(null);
    });
  }
}
