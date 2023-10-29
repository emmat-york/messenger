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
import { NgForOf } from '@angular/common';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  @Input() contacts!: Contact[];

  @Output() setSelectedContactId = new EventEmitter<number>();

  filterControl = new FormControl('');

  onContactSelect(id: number): void {
    this.setSelectedContactId.emit(id);
  }
}
