import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { InputComponent } from '../../../../../../shared/components/form/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact.component';
import { NgForOf, NgIf } from '@angular/common';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';
import { Contact } from './components/interfaces/contact.interfaces';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  @Input() selectedContactId!: number | undefined;
  @Input() contacts!: Contact[] | null;

  @Output() setSelectedContact = new EventEmitter<Contact>();

  filterControl = new FormControl('');

  onContactSelect(contact: Contact): void {
    this.setSelectedContact.emit(contact);
  }
}
