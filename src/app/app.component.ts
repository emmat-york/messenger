import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SocketService } from './shared/services/api/socket/socket.service';
import { ChatFacade } from './store/chat/chat.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, PushPipe],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DestroyRef) private readonly destroyRef: DestroyRef,
    private readonly socketService: SocketService,
    private readonly chatFacade: ChatFacade,
  ) {}

  ngOnInit(): void {
    this.subscribeToMessage();
  }

  private subscribeToMessage(): void {
    this.socketService
      .getMessage$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(message => this.chatFacade.setMessage(message));
  }
}
