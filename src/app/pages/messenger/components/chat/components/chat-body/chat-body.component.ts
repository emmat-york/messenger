import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MessageComponent],
})
export class ChatBodyComponent {
  @Input() messages = Array(30).fill({ id: 1 });
}
