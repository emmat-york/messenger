import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Contact } from '../../../../../../store/user/user.interface';
import { DateFormat } from '../../../../../../shared/enums/date-formats.enum';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, NgOptimizedImage],
})
export class ContactComponent {
  @Input() contact!: Contact;

  readonly dateFormat = DateFormat;
}
