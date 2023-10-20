import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
} from '@angular/core';
import { NotificationService } from './shared/services/app/notification/notification.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private notificationService: NotificationService,
  ) {}

  ngAfterViewInit(): void {
    this.setViewRefForNotificationService();
  }

  private setViewRefForNotificationService(): void {
    this.notificationService.viewRef = this.viewContainerRef;
  }
}
