import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements Modal {
  @Input() closeAction: () => void;

  constructor(private readonly settingsFacade: SettingsFacade) {}
}
