import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';
import { getTrimmedString } from '../../../../../../shared/helpers/input.helper';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgOptimizedImage],
})
export class ChatInputComponent implements OnInit {
  @Input() set input(input: string) {
    this.control.setValue(input, { emitEvent: false });
  }

  @Output() setInput = new EventEmitter<string>();
  @Output() sendMessage = new EventEmitter<void>();

  @ViewChild('chatInput') chatInputRef!: ElementRef<HTMLInputElement>;

  control = new FormControl('', { nonNullable: true });

  constructor(private readonly destroyRef: DestroyRef) {}

  @HostListener('keydown.enter') enterKeyListener(): void {
    this.onSendMessage();
  }

  ngOnInit(): void {
    this.subscribeToInput();
  }

  onSendMessage(): void {
    if (!this.control.getRawValue()) {
      return;
    }

    this.sendMessage.emit();
    this.chatInputRef.nativeElement.focus();
  }

  private subscribeToInput(): void {
    this.control.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(input => this.setInput.emit(getTrimmedString(input)));
  }
}
