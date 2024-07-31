import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../../../store/user/user.facade';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter/array-filter.pipe';
import { IconPipe } from '../../../../shared/pipes/icon/icon.pipe';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Contact } from '../../../../store/user/user.interface';
import { debounceTime, fromEvent, Observable } from 'rxjs';
import { UserState } from '../../../../store/user/user.feature';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from '../chat/components/chat-body/interfaces/chat-body.interface';
import { ScrollCircleComponent } from '../../../../shared/components/scroll-circle/scroll-circle.component';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  imports: [
    ReactiveFormsModule,
    ContactComponent,
    NgOptimizedImage,
    ArrayFilterPipe,
    LetDirective,
    IconPipe,
    NgIf,
    NgForOf,
    ScrollCircleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit, AfterViewInit {
  readonly vm$: Observable<UserState> = this.userFacade.vm$;
  readonly control = new FormControl<string>('', { nonNullable: true });

  isScrollCircleShown = false;
  noSearchResults = false;

  @ViewChild('contactList')
  private readonly contactList?: ElementRef<HTMLUListElement>;
  @ViewChildren(ContactComponent)
  private readonly contacts?: QueryList<ContactComponent>;

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
    private readonly renderer2: Renderer2,
    private readonly modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        requestAnimationFrame(() => {
          const hasResult = !!this.contacts?.length;
          this.noSearchResults = !!value && !hasResult;
          this.cdRef.markForCheck();
        });
      });
  }

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  openUserMenu(): void {
    this.modalService.open(UserMenuComponent);
  }

  setSelectedUserId(
    selectedContactId: number | undefined,
    contact: Contact,
  ): void {
    if (selectedContactId === contact.id) {
      return;
    }

    this.userFacade.setSelectedContact(contact);
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
