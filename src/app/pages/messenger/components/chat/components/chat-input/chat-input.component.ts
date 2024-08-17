import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { ChatFacade } from '../../../../../../store/chat/chat.facade';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';
import { ContentEditableFormDirective } from './directives/contenteditable.directive';
import { getTrimmedString } from '../../../../../../shared/utils/form/form.util';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  imports: [NgOptimizedImage, IconPipe, ContentEditableFormDirective, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInputComponent {
  @Input() placeholder = '';
  @Input() input = '';

  @ViewChild('chatInput') chatInputRef: ElementRef<HTMLInputElement>;

  constructor(private readonly chatFacade: ChatFacade) {}

  setInput(input: string): void {
    this.chatFacade.setInput(input);
  }

  sendMessage(): void {
    if (!this.input) {
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
