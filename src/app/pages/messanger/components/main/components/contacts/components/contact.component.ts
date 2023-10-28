import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from './interfaces/contact.interfaces';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() contact!: Contact;
}
