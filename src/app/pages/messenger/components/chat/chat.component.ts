import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { NgIf } from '@angular/common';
import { NoSelectedContactComponent } from './components/no-selected-contact/no-selected-contact.component';
import { Observable } from 'rxjs';
import { ChatState } from '../../../../store/chat/chat.feature';
import { UserState } from '../../../../store/user/user.feature';

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
    NgIf,
    NoSelectedContactComponent,
  ],
  providers: [ChatFacade],
})
export class ChatComponent {
  readonly userVm$: Observable<UserState> = this.userFacade.vm$;
  readonly chatVm$: Observable<ChatState> = this.chatFacade.vm$;

  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
  ) {}

  setInput(input: string): void {
    this.chatFacade.setInput(input);
  }

  sendMessage(): void {
    this.chatFacade.sendMessage();
  }
}
