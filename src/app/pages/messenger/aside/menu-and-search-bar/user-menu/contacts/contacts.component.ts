import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../../../shared/components/input/input.component';
import { UserFacade } from '../../../../../../store/user/user.facade';
import { LetDirective } from '@ngrx/component';
import { ContactComponent } from './contact/contact.component';
import { ArrayFilterPipe } from '../../../../../../shared/pipes/array-filter.pipe';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    LetDirective,
    ContactComponent,
    ArrayFilterPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsModalComponent implements Modal {
  @Input() closeAction: () => void;

  readonly contacts$ = this.userFacade.contacts$;

  readonly searchControl = new FormControl('', { nonNullable: true });

  constructor(private readonly userFacade: UserFacade) {}
}
