import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { UserFacade } from '../../../../../../store/user/user.facade';

@Component({
  selector: 'app-version',
  standalone: true,
  templateUrl: 'version.component.html',
  styleUrl: 'version.component.scss',
  imports: [ButtonComponent, LetDirective, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionComponent implements Modal {
  @Input() closeAction: () => void;

  readonly versions$ = this.userFacade.vm$;

  constructor(private readonly userFacade: UserFacade) {}
}
