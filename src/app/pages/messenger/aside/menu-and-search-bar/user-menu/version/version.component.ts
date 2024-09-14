import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';

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

  readonly versions$ = this.settingsFacade.versions$;

  constructor(private readonly settingsFacade: SettingsFacade) {}
}
