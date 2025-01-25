import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { LetDirective } from '@ngrx/component';
import { ChatTopBarComponent } from './chat-top-bar/chat-top-bar.component';
import { NoSelectedContactComponent } from './no-selected-contact/no-selected-contact.component';
import { distinctUntilChanged, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserFacade } from '../../../store/user/user.facade';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { ChatBodyComponent } from './chat-body/chat-body.component';

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
  readonly essentialData$ = this.userFacade.essentialData$;
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
    this.chatFacade.selectedDialog$
      .pipe(distinctUntilChanged(), filter(Boolean), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.scrollDown());
  }
}
