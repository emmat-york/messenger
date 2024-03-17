import { Pipe, PipeTransform } from '@angular/core';
import { NotificationType } from '../../interfaces/notification.interface';
import { SrcBuilder } from '../../../../utils/src-builder/src-builder.util';

@Pipe({
  name: 'notificationIcon',
  standalone: true,
})
export class NotificationIconPipe implements PipeTransform {
  transform(type: NotificationType): string {
    return new SrcBuilder().setFolderOne('system').setName(type).path;
  }
}
