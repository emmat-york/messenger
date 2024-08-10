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
import { DialogComponent } from './components/dialog/dialog.component';
import { UserFacade } from '../../../../store/user/user.facade';
import { IconPipe } from '../../../../shared/pipes/icon/icon.pipe';
import { NgOptimizedImage } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Dialog } from '../../../../store/user/user.interface';
import { debounceTime, fromEvent, Observable } from 'rxjs';
import { UserState } from '../../../../store/user/user.feature';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from '../chat/components/chat-body/interfaces/chat-body.interface';
import { ScrollCircleComponent } from '../../../../shared/components/scroll-circle/scroll-circle.component';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserMenuModalData } from './components/user-menu/interfaces/user-menu.interface';

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
  readonly vm$: Observable<UserState> = this.userFacade.vm$;

  isScrollCircleShown = false;

  @ViewChild('contactList')
  private readonly contactList?: ElementRef<HTMLUListElement>;

  constructor(
    private readonly modalService: ModalService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  openUserMenu(): void {
    this.modalService.open<UserMenuModalData>({
      component: UserMenuComponent,
      modalData: { userFacade: this.userFacade },
      settings: { type: 'aside' },
    });
  }

  setSelectedDialog(selectedDialogId: number | undefined, dialog: Dialog): void {
    if (selectedDialogId === dialog.id) {
      return;
    }

    this.userFacade.setSelectedDialog(dialog);
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
