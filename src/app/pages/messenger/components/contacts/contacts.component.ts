import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ContactComponent} from "./components/contact/contact.component";

@Component({
  selector: 'contacts',
  standalone: true,
  templateUrl: 'contacts.component.html',
  styleUrl: 'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactComponent],
})
export class ContactsComponent {}
