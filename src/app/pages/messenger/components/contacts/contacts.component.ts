import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
