import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../../../store/user/user.facade';
import { ArrayFilterPipe } from '../../../../shared/pipes/array-filter/array-filter.pipe';
import { IconPipe } from '../../../../shared/pipes/icon/icon.pipe';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { Contact } from '../../../../store/user/user.interface';
import { Observable } from 'rxjs';
import { UserState } from '../../../../store/user/user.feature';

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
    NgForOf,
  ],
})
export class ContactsComponent {
  readonly vm$: Observable<UserState> = this.userFacade.vm$;
  readonly control = new FormControl<string>('', { nonNullable: true });

  constructor(private readonly userFacade: UserFacade) {}

  setSelectedUserId(
    selectedContactId: number | undefined,
    contact: Contact,
  ): void {
    if (selectedContactId === contact.id) {
      return;
    }

    this.userFacade.setSelectedContact(contact);
  }
}
