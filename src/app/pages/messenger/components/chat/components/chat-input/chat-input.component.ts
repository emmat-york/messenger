import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';
import { getTrimmedString } from '../../../../../../shared/utils/form/form.util';
import { NgOptimizedImage } from '@angular/common';
import { ChatFacade } from '../../../../../../store/chat/chat.facade';
import { SLEEPY_OPTIONS } from '../../../../../../shared/constants/form.constant';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  imports: [ReactiveFormsModule, NgOptimizedImage, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInputComponent implements OnInit {
  @Input() set input(value: string) {
    this.control.setValue(value, SLEEPY_OPTIONS);
  }

  @ViewChild('chatInput') chatInputRef: ElementRef<HTMLInputElement>;

  readonly control = new FormControl('', { nonNullable: true });

  constructor(
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  @HostListener('keydown.enter') enterKeyListener(): void {
    this.onSendMessage();
  }

  ngOnInit(): void {
    this.subscribeToInput();
  }

  onSendMessage(): void {
    if (!this.control.value) {
      return;
    }

    this.chatFacade.sendMessage();
    this.chatInputRef.nativeElement.focus();
  }

  private subscribeToInput(): void {
    this.control.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(value => this.chatFacade.setInput(getTrimmedString(value)));
  }
}
