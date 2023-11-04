import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../contacts/components/interfaces/contact.interfaces';
import { MessageComponent } from './components/message/message.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
  imports: [NgIf, NgForOf, MessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  @Input() selectedContact!: Contact;
}
