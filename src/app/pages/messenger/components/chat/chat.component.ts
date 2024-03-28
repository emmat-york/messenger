import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { combineLatest, map } from 'rxjs';
import { NgIf } from '@angular/common';
import { NoSelectedContactComponent } from './components/no-selected-contact/no-selected-contact.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
})
export class ChatComponent {
  readonly componentVM$ = combineLatest([
    this.userFacade.userVM$,
    this.chatFacade.chatVM$,
  ]).pipe(
    map(([userVM, chatVM]) => ({ userVM, chatVM })),
    takeUntilDestroyed(this.destroyRef),
  );

  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  setInput(input: string): void {
    this.chatFacade.setInput(input);
  }

  sendMessage(): void {
    this.chatFacade.sendMessage();
  }
}
