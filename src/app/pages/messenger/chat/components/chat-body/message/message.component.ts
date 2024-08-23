import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message } from '../../../chat.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: 'message.component.html',
  styleUrl: 'message.component.scss',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  @Input() isYoursMessage: boolean;
  @Input() message: Message;
}
