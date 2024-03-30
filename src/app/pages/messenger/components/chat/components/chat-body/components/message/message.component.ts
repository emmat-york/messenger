import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message } from '../../../../interfaces/chat.interface';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { DateFormat } from '../../../../../../../../shared/enums/date-formats.enum';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: 'message.component.html',
  styleUrl: 'message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, NgIf, NgForOf],
})
export class MessageComponent {
  @Input() message!: Message;

  readonly dateFormat = DateFormat;
}
