import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-search-bar',
  standalone: true,
  templateUrl: 'contacts-search-bar.component.html',
  styleUrl: 'contacts-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsSearchBarComponent {}
