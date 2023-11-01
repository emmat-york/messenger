import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message } from '../../../contacts/components/interfaces/contact.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() avatar!: string;
}
