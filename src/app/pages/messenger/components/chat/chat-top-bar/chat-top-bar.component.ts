import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Dialog } from '../../../../../store/user/user.interface';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTopBarComponent {
  @Input() selectedDialog: Dialog;
}
