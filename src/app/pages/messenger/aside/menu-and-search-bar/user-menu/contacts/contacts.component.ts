import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../../../shared/components/input/input.component';
import { UserFacade } from '../../../../../../store/user/user.facade';
import { LetDirective } from '@ngrx/component';
import { ContactComponent } from './contact/contact.component';
import { ArrayFilterPipe } from '../../../../../../shared/pipes/array-filter.pipe';
import {
  Dialog,
  EssentialUserData,
} from '../../../../../../shared/services/api/chat/chat-service.interface';
import { ChatFacade } from '../../../../../../store/chat/chat.facade';

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

  readonly selectedDialog$ = this.chatFacade.selectedDialog$;
  readonly contacts$ = this.userFacade.contacts$;
  readonly dialogs$ = this.userFacade.dialogs$;

  readonly searchControl = new FormControl<string>('', { nonNullable: true });

  constructor(
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
  ) {}

  onContactSelect(
    contact: EssentialUserData,
    dialogs: Dialog[],
    selectedDialog: Dialog | EssentialUserData | null,
  ): void {
    const dialogByContact = dialogs.find(dialog => dialog.uuid === contact.uuid);

    if (selectedDialog?.uuid === dialogByContact?.uuid) {
      this.closeAction();
      return;
    }

    this.chatFacade.setSelectedDialog(dialogByContact ? dialogByContact : contact);
    this.closeAction();
  }
}
