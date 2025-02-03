import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { IconPipe } from '../../../../../../shared/pipes/icon.pipe';
import { NgOptimizedImage } from '@angular/common';
import { UserFacade } from '../../../../../../store/user/user.facade';
import { AvatarComponent } from '../../../../../../shared/components/avatar/avatar.component';
import { LetDirective } from '@ngrx/component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { LanguageMapPipe } from './pipes/language-map.pipe';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  imports: [
    IconPipe,
    NgOptimizedImage,
    AvatarComponent,
    LetDirective,
    ButtonComponent,
    LanguageMapPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements Modal {
  @Input() closeAction: () => void;

  readonly essentialData$ = this.userFacade.essentialData$;
  readonly selectSelectedLanguage$ = this.settingsFacade.selectSelectedLanguage$;

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
      icon: 'tune',
      text: 'Advanced',
      type: 'Advanced',
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
