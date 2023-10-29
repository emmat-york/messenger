import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() contacts: Contact[] = [
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
    {
      id: 1,
      userName: 'popSmoke 1',
      avatar: 'assets/icons/system/avatar.svg',
      messages: [{ id: 1, message: 'message', date: new Date() }],
    },
  ];

  filterControl = new FormControl('');

  onContactSelect(id: number): void {
    console.log(id);
  }
}
