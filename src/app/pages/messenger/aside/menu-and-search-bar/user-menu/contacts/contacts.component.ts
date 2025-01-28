import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
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
import { ModalService } from '../../../../../../shared/services/app/modal/modal.service';
import { AddContactComponent } from './add-contact/add-contact.component';

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

  readonly searchControl = this.formBuilder.control<string>('');

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly modalService: ModalService,
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
  ) {}

  onAddContact(): void {
    this.modalService.open({ component: AddContactComponent, settings: { multi: true } });
  }

  onContactSelect(
    contact: EssentialUserData,
    dialogs: Dialog[],
    selectedDialog: Dialog | EssentialUserData | null,
  ): void {
    const dialogByContact = dialogs.find(dialog => dialog.uuid === contact.uuid);

    if (selectedDialog?.uuid === dialogByContact?.uuid) {
      this.modalService.dismissAll();
      return;
    }

    this.chatFacade.setSelectedDialog(dialogByContact ? dialogByContact : contact);
    this.modalService.dismissAll();
  }
}
