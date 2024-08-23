import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { MessageComponent } from './message/message.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from './chat-body.interface';
import { ScrollCircleComponent } from '../../../../../../shared/components/scroll-circle/scroll-circle.component';
import { Message } from '../../chat.interface';
import { MessageSkeletonComponent } from './message-skeleton/message-skeleton.component';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  imports: [MessageComponent, ScrollCircleComponent, MessageSkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBodyComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() messages: Message[] = [];
  @Input() uuid: number | undefined;
  @Input() isLoading: boolean;

  hasTheChatBottomBeenReached = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLUnknownElement>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes['messages']) {
      return;
    }

    const { currentValue, previousValue, firstChange } = changes['messages'];

    if (firstChange || currentValue.length === previousValue.length) {
      return;
    }

    const isLastMessageYours = this.uuid === currentValue[currentValue.length - 1].uuid;

    if (
      isLastMessageYours ||
      (!isLastMessageYours && !this.hasTheChatBottomBeenReached)
    ) {
      requestAnimationFrame(() => {
        this.scrollDown();
      });
    }
  }

  ngOnInit(): void {
    this.initScrollListener();
  }

  ngAfterViewInit(): void {
    this.scrollDown();
  }

  scrollDown(): void {
    this.renderer2.setProperty(
      this.elementRef.nativeElement,
      'scrollTop',
      this.elementRef.nativeElement.scrollHeight,
    );
  }

  private initScrollListener(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        const {
          target: { clientHeight, scrollTop, scrollHeight },
        } = event as unknown as ScrollEvent;

        const newScrollState = clientHeight + scrollTop + 20 < scrollHeight;

        if (this.hasTheChatBottomBeenReached === newScrollState) {
          return;
        }

        this.hasTheChatBottomBeenReached = newScrollState;
        this.cdRef.markForCheck();
      });
  }
}
