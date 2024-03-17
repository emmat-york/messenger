import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';
import { AuthUserService } from '../../../../../../shared/services/app/auth-user/auth-user.service';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, IconPipe],
})
export class ChatTopBarComponent {
  constructor(private readonly authUserService: AuthUserService) {}

  onLogOut(): void {
    this.authUserService.logOut();
  }
}
