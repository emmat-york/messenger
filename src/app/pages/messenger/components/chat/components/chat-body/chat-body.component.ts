import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MessageComponent } from './components/message/message.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from './interfaces/chat-body.interface';
import { ScrollCircleComponent } from '../../../../../../shared/components/scroll-circle/scroll-circle.component';
import { NgIf } from '@angular/common';
import { Message } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  imports: [MessageComponent, ScrollCircleComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBodyComponent implements OnInit {
  @Input() messages: Message[] = [];

  isScrollCircleShown = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLUnknownElement>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngOnInit(): void {
    this.subscribeToScroll();
  }

  onScrollDown(): void {
    this.renderer2.setProperty(
      this.elementRef.nativeElement,
      'scrollTop',
      this.elementRef.nativeElement.scrollHeight,
    );
  }

  private subscribeToScroll(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        const {
          target: { clientHeight, scrollTop, scrollHeight },
        } = event as unknown as ScrollEvent;

        const newScrollState = clientHeight + scrollTop + 20 < scrollHeight;

        if (this.isScrollCircleShown === newScrollState) {
          return;
        }

        this.isScrollCircleShown = newScrollState;
        this.cdRef.markForCheck();
      });
  }
}
