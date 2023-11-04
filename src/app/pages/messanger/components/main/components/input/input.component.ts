import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() set inputText(inputText: string) {
    this.text = inputText;
  }
  @Input() isLoading!: boolean;

  @Output() setInputText = new EventEmitter<string>();
  @Output() sendMessage = new EventEmitter<void>();

  text = '';

  constructor() {
    console.log('InputComponent');
  }

  @HostListener('document:keydown.enter') onEnterKeydown(): void {
    this.onSendMessage();
  }

  onInput(text: string): void {
    this.setInputText.emit(text);
  }

  onSendMessage(): void {
    const text = this.text;

    if (!text.trim()) {
      this.setInputText.emit('');
      return;
    }

    this.sendMessage.emit();
  }
}
