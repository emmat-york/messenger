import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HistoryComponent } from './components/history/history.component';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  imports: [ContactsComponent, HistoryComponent, InputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
