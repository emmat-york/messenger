import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsFacade } from '../../store/settings/settings.facade';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  constructor(private readonly settingsFacade: SettingsFacade) {}
}
