import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Contact } from '../contacts/components/interfaces/contact.interface';
import { MessageComponent } from './components/message/message.component';
import { NgForOf, NgIf } from '@angular/common';
import { ScrollCircleComponent } from '../scroll-circle/scroll-circle.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from './interfaces/history.interface';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
  imports: [NgIf, NgForOf, MessageComponent, ScrollCircleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements AfterViewInit {
  @Input() selectedContact!: Contact;

  @ViewChild('messageList') messageList!: ElementRef<HTMLUListElement>;
  isScrollCircleShown = true;

  private destroyRef = inject(DestroyRef);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  onScrollDown(): void {
    this.renderer2.setProperty(
      this.messageList.nativeElement,
      'scrollTop',
      this.messageList.nativeElement.scrollHeight,
    );
  }

  private subscribeToScroll(): void {
    fromEvent(this.messageList.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        const {
          target: { clientHeight, scrollTop, scrollHeight },
        } = event as unknown as ScrollEvent;

        this.isScrollCircleShown = clientHeight + scrollTop + 20 < scrollHeight;
        this.changeDetectorRef.markForCheck();
      });
  }
}
