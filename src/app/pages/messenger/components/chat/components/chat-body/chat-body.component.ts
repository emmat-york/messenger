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
import { MessageComponent } from './components/message/message.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from './interfaces/chat-body.interface';
import { ScrollCircleComponent } from '../../../../../../shared/components/scroll-circle/scroll-circle.component';
import { Message } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  imports: [MessageComponent, ScrollCircleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBodyComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() messages: Message[] = [];
  @Input() uuid: number | undefined;

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

  scrollDown(softScroll?: boolean): void {
    if (softScroll) {
      this.softScroll();
      return;
    }

    this.scroll();
  }

  private softScroll(): void {
    this.setScrollBehaviour('smooth');
    this.scroll();
    this.setScrollBehaviour('auto');
  }

  private scroll(): void {
    this.renderer2.setProperty(
      this.elementRef.nativeElement,
      'scrollTop',
      this.elementRef.nativeElement.scrollHeight,
    );
  }

  private setScrollBehaviour(behaviour: 'smooth' | 'auto'): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'scrollBehavior', behaviour);
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
