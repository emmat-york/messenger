import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../../../store/user/user.facade';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter/array-filter.pipe';
import { IconPipe } from '../../../../shared/pipes/icon/icon.pipe';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { SocketService } from '../../../../shared/services/api/socket/socket.service';
import { Contact } from '../../../../store/user/user.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    ContactComponent,
    NgOptimizedImage,
    ArrayFilterPipe,
    LetDirective,
    IconPipe,
    NgIf,
  ],
})
export class ContactsComponent {
  userVM$ = this.userFacade.userVM$;

  control = new FormControl<string>('', { nonNullable: true });

  constructor(
    private readonly socketService: SocketService,
    private readonly userFacade: UserFacade,
  ) {}

  setSelectedUserId(
    selectedContactId: number | undefined,
    contact: Contact,
  ): void {
    if (selectedContactId === contact.id) {
      return;
    }

    this.socketService.joinRoom(contact.userName, contact.roomId);
    this.userFacade.setSelectedContact(contact);
  }
}
