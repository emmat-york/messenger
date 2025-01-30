import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
} from '@angular/core';
import { Modal } from '../../../../../../../shared/services/app/modal/modal.interface';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../../../../shared/components/input/input.component';
import { ContactsService } from './add-contact.service';
import { ButtonComponent } from '../../../../../../../shared/components/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { EssentialUserData } from '../../../../../../../shared/services/api/chat/chat-service.interface';
import { LetDirective } from '@ngrx/component';
import { ContactComponent } from '../contact/contact.component';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../../shared/pipes/icon.pipe';
import { UserFacade } from '../../../../../../../store/user/user.facade';
import { ContactIdentificationPipe } from './contact-identification.pipe';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  templateUrl: 'add-contact.component.html',
  styleUrl: 'add-contact.component.scss',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    LetDirective,
    ContactComponent,
    NgOptimizedImage,
    IconPipe,
    ContactIdentificationPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddContactComponent implements OnInit, Modal {
  @Input() closeAction: () => void;

  readonly searchControl = this.formBuilder.control<string>('');
  readonly foundContacts$ = new BehaviorSubject<EssentialUserData[]>([]);

  selectedContact: EssentialUserData | null = null;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          this.selectedContact = null;
          return this.contactsService.getContactByEmail$(value);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(contacts => this.foundContacts$.next(contacts));
  }

  onSelectContact(contact: EssentialUserData): void {
    this.selectedContact = this.selectedContact?.uuid === contact.uuid ? null : contact;
  }

  onAddContact(): void {
    if (
      !this.selectedContact ||
      this.selectedContact.isYourContact ||
      this.selectedContact.isYou
    ) {
      return;
    }

    this.userFacade.addContact(this.selectedContact);
    this.closeAction();
  }
}
