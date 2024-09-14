import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Dialog } from '../../../../shared/services/api/chat/chat-service.interface';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  imports: [NgOptimizedImage, AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTopBarComponent {
  @Input() selectedDialog: Dialog;
}
