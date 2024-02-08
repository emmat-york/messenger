import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Notification, NotificationType } from './interfaces/notification.interface';
import { NgClass, NgSwitch, NgSwitchCase, TitleCasePipe } from '@angular/common';
import { IconPipe } from '../../pipes/icon/icon.pipe';

@Component({
  selector: 'notification',
  standalone: true,
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgSwitch, TitleCasePipe, NgSwitchCase, IconPipe],
})
export class NotificationComponent implements Notification {
  @Input() type: NotificationType = 'success';
  @Input() message = '';
  @Input() closeAction(): void {}
}
