import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import {
  Dialog,
  EssentialUserData,
} from '../../../../shared/services/api/chat/chat-service.interface';
import { DialogTypeGuardPipe } from '../../../../shared/pipes/dialog-type-guard.pipe';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  imports: [NgOptimizedImage, AvatarComponent, NgIf, DialogTypeGuardPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTopBarComponent {
  @Input() dialogOrEssentialUserData: Dialog | EssentialUserData;
}
