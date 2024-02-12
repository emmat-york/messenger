import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../../../store/user/user.facade';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter/array-filter.pipe';
import { IconPipe } from '../../../../shared/pipes/icon/icon.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContactComponent,
    ReactiveFormsModule,
    ArrayFilterPipe,
    IconPipe,
    NgOptimizedImage,
  ],
})
export class ContactsComponent {
  contacts = [
    {
      name: 'Andrew',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Pavel',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message:
          "You: i don't remember anything 😄 You: i don't remember anything",
        date: new Date(),
      },
    },
    {
      name: 'Oleg',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Leha',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Marina',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Vitaliy',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Andrew',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Pavel',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Oleg',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Leha',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Marina',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
    {
      name: 'Vitaliy',
      avatar: 'assets/icons/system/avatar.svg',
      lastMessage: {
        message: "You: i don't remember anything 😄",
        date: new Date(),
      },
    },
  ];

  control = new FormControl('');

  constructor(private readonly userFacade: UserFacade) {}
}
