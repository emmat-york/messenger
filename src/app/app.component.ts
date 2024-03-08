import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { NotificationService } from './shared/services/app/notification/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, PushPipe],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly viewRef: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.notificationService.viewRef = this.viewRef;
  }
}
