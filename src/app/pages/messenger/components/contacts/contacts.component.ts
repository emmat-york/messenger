import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../../../store/user/user.facade';
import { NgForOf } from '@angular/common';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';

@Component({
  selector: 'contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactComponent, ReactiveFormsModule, NgForOf, ContactsFilterPipe],
})
export class ContactsComponent {
  contacts = [
    {
      name: 'Andrew',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Oleg',
    },
    {
      name: 'Leha',
    },
    {
      name: 'Marina',
    },
    {
      name: 'Vitaliy',
    },
    {
      name: 'Andrew',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Oleg',
    },
    {
      name: 'Leha',
    },
    {
      name: 'Marina',
    },
    {
      name: 'Vitaliy',
    },
  ];

  control = new FormControl('');

  constructor(private readonly userFacade: UserFacade) {}
}
