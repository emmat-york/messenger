import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputComponent } from '../../../../../../shared/components/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact.component';
import { NgForOf, NgIf } from '@angular/common';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';
import { Contact } from './components/interfaces/contact.interface';
import { ScrollCircleComponent } from '../scroll-circle/scroll-circle.component';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollEvent } from '../history/interfaces/history.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.scss'],
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ContactComponent,
    NgForOf,
    ContactsFilterPipe,
    NgIf,
    ScrollCircleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements AfterViewInit {
  @Input() selectedContactId: number | undefined;
  @Input() contacts!: Contact[];

  @Output() setSelectedContact = new EventEmitter<Contact>();

  @ViewChild('contactList') contactList!: ElementRef<HTMLUListElement>;

  filterControl = new FormControl('');
  isScrollCircleShown = true;

  private destroyRef = inject(DestroyRef);

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.subscribeToScroll();
  }

  onContactSelect(contact: Contact): void {
    this.setSelectedContact.emit(contact);
  }

  onScrollUp(): void {
    this.contactList.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  trackBy(_: number, contact: Contact): number {
    return contact.id;
  }

  private subscribeToScroll(): void {
    fromEvent(this.contactList.nativeElement, 'scroll')
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
