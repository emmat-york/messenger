import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  Notification,
  NotificationType,
} from './interfaces/notification.interface';
import { NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { IconPipe } from '../../pipes/icon/icon.pipe';
import { NotificationIconPipe } from './pipes/notification-icon/notification-icon.pipe';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    TitleCasePipe,
    IconPipe,
    NotificationIconPipe,
    NgOptimizedImage,
  ],
})
export class NotificationComponent implements Notification {
  @Input() type: NotificationType = 'success';
  @Input() message = '';
  @Input() closeAction(): void {}
}
