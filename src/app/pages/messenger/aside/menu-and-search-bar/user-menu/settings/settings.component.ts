import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class SettingsComponent implements Modal {
  @Input() closeAction: () => void;

  constructor(private readonly settingsFacade: SettingsFacade) {}
}
