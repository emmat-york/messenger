import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { NgOptimizedImage } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from '../chat/components/chat-body/chat-body.interface';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ScrollCircleComponent } from '../../../shared/components/scroll-circle/scroll-circle.component';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { ModalService } from '../../../shared/services/app/modal/modal.service';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { Dialog } from '../../../store/user/user.interface';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  templateUrl: 'dialogs.component.html',
  styleUrl: 'dialogs.component.scss',
  imports: [
    ScrollCircleComponent,
    DialogComponent,
    NgOptimizedImage,
    LetDirective,
    IconPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent implements AfterViewInit {
  readonly vm$ = this.chatFacade.vm$;

  isScrollCircleShown = false;

  @ViewChild('contactList')
  private readonly contactList?: ElementRef<HTMLUListElement>;

  constructor(
    private readonly modalService: ModalService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly chatFacade: ChatFacade,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  openUserMenu(): void {
    this.modalService.open({
      component: UserMenuComponent,
      settings: { type: 'aside' },
    });
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
