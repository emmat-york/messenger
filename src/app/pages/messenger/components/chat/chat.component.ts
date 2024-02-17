import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ChatTopBarComponent,
    ChatInputComponent,
    ChatBodyComponent,
    LetDirective,
  ],
})
export class ChatComponent {
  chatVM$ = this.chatFacade.chatVM$;

  constructor(private readonly chatFacade: ChatFacade) {}

  setInput(input: string): void {
    this.chatFacade.setInput(input);
  }

  sendMessage(): void {
    this.chatFacade.sendMessage();
  }
}
