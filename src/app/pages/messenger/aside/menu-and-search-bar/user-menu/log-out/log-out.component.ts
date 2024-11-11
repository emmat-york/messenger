import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { AuthFacade } from '../../../../../../store/auth/auth.facade';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon.pipe';

@Component({
  selector: 'app-log-out',
  standalone: true,
  templateUrl: 'log-out.component.html',
  styleUrl: 'log-out.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NgOptimizedImage, IconPipe],
})
export class LogOutComponent implements Modal {
  @Input() closeAction: () => void;

  constructor(private readonly authFacade: AuthFacade) {}

  onLogOut(): void {
    this.authFacade.logOut();
  }
}
