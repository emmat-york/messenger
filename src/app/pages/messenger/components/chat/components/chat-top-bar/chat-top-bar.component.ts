import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AuthUserService } from '../../../../../../shared/services/app/auth-user/auth-user.service';
import { Contact } from '../../../../../../store/user/user.interface';

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

  constructor(private readonly authUserService: AuthUserService) {}

  onLogOut(): void {
    this.authUserService.logOut();
  }
}
