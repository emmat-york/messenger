import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollCircleComponent } from '../../../../shared/components/scroll-circle/scroll-circle.component';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { ScrollEvent } from '../../chat/chat-body/chat-body.interface';
import { Dialog } from '../../../../shared/services/api/chat/chat-service.interface';
import { ChatState } from '../../../../store/chat/chat.feature';
import { UserStoreState } from '../../../../store/user/user.feature';
import { AsideState } from '../../../../store/aside/aside.feature';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter.pipe';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  templateUrl: 'dialogs.component.html',
  styleUrl: 'dialogs.component.scss',
  imports: [ScrollCircleComponent, DialogComponent, ArrayFilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent implements AfterViewInit {
  @Input() userVm: UserStoreState;
  @Input() chatVm: ChatState;
  @Input() asideVm: AsideState;

  isScrollCircleShown = false;

  @ViewChild('contactList')
  private readonly contactList?: ElementRef<HTMLUListElement>;

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  setSelectedDialog(selectedDialogId: number | undefined, dialog: Dialog): void {
    if (selectedDialogId === dialog.id) {
      return;
    }

    this.chatFacade.setSelectedDialog(dialog);
  }

  onScrollUp(): void {
    this.renderer2.setProperty(this.contactList?.nativeElement, 'scrollTop', 0);
  }

  private subscribeToScroll(): void {
    if (!this.contactList?.nativeElement) {
      return;
    }

    fromEvent(this.contactList.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        const {
          target: { scrollTop },
        } = event as unknown as ScrollEvent;

        const newScrollState = scrollTop > 100;

        if (this.isScrollCircleShown === newScrollState) {
          return;
        }

        this.isScrollCircleShown = newScrollState;
        this.cdRef.markForCheck();
      });
  }
}
