import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AuthUserService } from '../../../../../../shared/services/app/auth-user/auth-user.service';
import { Contact } from '../../../../../../store/user/user.interface';
import { ModalService } from '../../../../../../shared/services/app/modal/modal.service';
import { ConfirmationModalComponent } from '../../../../../../shared/components/confirmation-modal/confirmation-modal.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class ChatTopBarComponent {
  @Input() selectedContact!: Contact;

  constructor(
    private readonly authUserService: AuthUserService,
    private readonly modalService: ModalService,
  ) {}

  onLogOut(): void {
    this.modalService
      .open(ConfirmationModalComponent)
      .pipe(take(1), filter(Boolean))
      .subscribe(() => this.authUserService.logOut());
  }
}
