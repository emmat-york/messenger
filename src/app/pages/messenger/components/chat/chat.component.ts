import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { NoSelectedContactComponent } from './components/no-selected-contact/no-selected-contact.component';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.scss',
  imports: [
    NoSelectedContactComponent,
    ChatTopBarComponent,
    ChatInputComponent,
    ChatBodyComponent,
    LetDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  readonly userVm$ = this.userFacade.vm$;
  readonly chatVm$ = this.chatFacade.vm$;

  @ViewChild(ChatBodyComponent) private readonly chatBodyComponent:
    | ChatBodyComponent
    | undefined;

  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.initSelectedDialogListener();
  }

  scrollDown(): void {
    this.chatBodyComponent?.scrollDown();
  }

  private initSelectedDialogListener(): void {
    // TODO: create separate selectedDialog selector for this code.
    this.chatVm$
      .pipe(
        map(({ selectedDialog }) => selectedDialog?.roomId),
        distinctUntilChanged(),
        filter(Boolean),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.scrollDown());
  }
}
