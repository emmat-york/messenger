import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-message-skeleton',
  standalone: true,
  templateUrl: 'message-skeleton.component.html',
  styleUrl: 'message-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSkeletonComponent {}
