import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HistoryComponent } from './components/history/history.component';
import { InputComponent } from './components/input/input.component';
import { UserFacade } from '../../../../shared/services/facade/user.facade';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  imports: [ContactsComponent, HistoryComponent, InputComponent, AsyncPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  contacts$ = this.userFacade.contacts$;

  constructor(private userFacade: UserFacade) {}

  setSelectedContactId(id: number): void {}
}
