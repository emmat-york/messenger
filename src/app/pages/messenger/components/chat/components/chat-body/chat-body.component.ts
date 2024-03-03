import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { MessageComponent } from './components/message/message.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from './interfaces/chat-body.interface';
import { ScrollCircleComponent } from '../../../scroll-circle/scroll-circle.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MessageComponent, ScrollCircleComponent, NgIf],
})
export class ChatBodyComponent implements AfterViewInit {
  @Input() isScrollCircleShown!: boolean;
  @Input() messages = Array(30).fill({ id: 1 });

  constructor(
    private readonly viewRef: ViewContainerRef,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  onScrollDown(): void {
    const element = this.viewRef.element.nativeElement;
    this.renderer2.setProperty(element, 'scrollTop', element.scrollHeight);
  }

  private subscribeToScroll(): void {
    fromEvent(this.viewRef.element.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        const {
          target: { clientHeight, scrollTop, scrollHeight },
        } = event as unknown as ScrollEvent;

        this.isScrollCircleShown = clientHeight + scrollTop + 20 < scrollHeight;
        this.cdRef.markForCheck();
      });
  }
}
