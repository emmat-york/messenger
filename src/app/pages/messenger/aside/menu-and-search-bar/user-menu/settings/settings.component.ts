import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { IconPipe } from '../../../../../../shared/pipes/icon.pipe';
import { NgOptimizedImage } from '@angular/common';
import { UserFacade } from '../../../../../../store/user/user.facade';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  imports: [IconPipe, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements Modal {
  @Input() closeAction: () => void;

  readonly settingsOptions = [
    {
      icon: 'account-circle',
      text: 'My Account',
      type: 'MyAccount',
    },
    {
      icon: 'notification-settings',
      text: 'Notifications And Sounds',
      type: 'NotificationsAndSounds',
    },
    {
      icon: 'lock',
      text: 'Privacy And Security',
      type: 'PrivacyAndSecurity',
    },
    {
      icon: 'chat-bubble',
      text: 'Chat Settings',
      type: 'ChatSettings',
    },
    {
      icon: 'translate',
      text: 'Language',
      type: 'Language',
    },
  ];

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly userFacade: UserFacade,
  ) {}

  onSetting(type: string): void {}
}
