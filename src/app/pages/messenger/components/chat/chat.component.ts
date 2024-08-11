import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { NoSelectedContactComponent } from './components/no-selected-contact/no-selected-contact.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.scss',
  imports: [
    ChatTopBarComponent,
    ChatInputComponent,
    ChatBodyComponent,
    LetDirective,
    NoSelectedContactComponent,
  ],
  providers: [ChatFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  readonly userVm$ = this.userFacade.vm$;
  readonly chatVm$ = this.chatFacade.vm$;

  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
  ) {}
}
