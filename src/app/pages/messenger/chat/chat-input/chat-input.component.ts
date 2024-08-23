import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { ContentEditableFormDirective } from './contenteditable.directive';
import { INITIAL_INPUT_HEIGHT } from './chat-input.constant';
import { IconPipe } from '../../../../shared/pipes/icon.pipe';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { getTrimmedString } from '../../../../shared/utils/form.util';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  imports: [NgOptimizedImage, IconPipe, ContentEditableFormDirective, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInputComponent {
  @Input() initialInputHeight = INITIAL_INPUT_HEIGHT;
  @Input() isLoading: boolean;
  @Input() placeholder = '';
  @Input() input = '';

  @Output() scrollDown = new EventEmitter<void>();

  @ViewChild('chatInput') chatInputRef: ElementRef<HTMLInputElement>;

  private previousInputHeight = INITIAL_INPUT_HEIGHT;

  constructor(private readonly chatFacade: ChatFacade) {}

  setInput(input: string): void {
    const currentInputHeight = this.chatInputRef.nativeElement.clientHeight;

    if (currentInputHeight !== this.previousInputHeight) {
      this.previousInputHeight = currentInputHeight;
      this.scrollDown.emit();
    }

    this.chatFacade.setInput(input);
  }

  sendMessage(): void {
    if (!this.input || this.isLoading) {
      this.chatInputRef.nativeElement.focus();
      return;
    }

    const trimmedInput = getTrimmedString(this.input);

    if (!trimmedInput && this.input.length) {
      this.setInput(trimmedInput);
      this.chatInputRef.nativeElement.focus();
      return;
    }

    this.chatFacade.sendMessage();
    this.chatInputRef.nativeElement.focus();
  }

  openEmojiMenu(): void {}
}
