import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: 'message.component.html',
  styleUrl: 'message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {}
