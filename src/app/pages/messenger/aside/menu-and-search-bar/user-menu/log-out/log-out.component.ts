import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { AuthFacade } from '../../../../../../store/auth/auth.facade';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-log-out',
  standalone: true,
  templateUrl: 'log-out.component.html',
  styleUrl: 'log-out.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogOutComponent implements Modal {
  @Input() closeAction: () => void;

  constructor(private readonly authFacade: AuthFacade) {}

  onLogOut(): void {
    this.authFacade.logOut();
  }
}
