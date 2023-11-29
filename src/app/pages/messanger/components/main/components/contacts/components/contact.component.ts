import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact, Message } from './interfaces/contact.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() contact!: Contact;

  get lastMessage(): Message {
    return this.contact.messages[this.contact.messages.length - 1];
  }
}
