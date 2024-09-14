import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { VersionComponent } from './version/version.component';
import { TelegramDesktopComponent } from './telegram-desktop/telegram-desktop.component';
import { IconPipe } from '../../../../../shared/pipes/icon.pipe';
import { AvatarComponent } from '../../../../../shared/components/avatar/avatar.component';
import { Modal } from '../../../../../shared/services/app/modal/modal.interface';
import { ModalService } from '../../../../../shared/services/app/modal/modal.service';
import { UserFacade } from '../../../../../store/user/user.facade';
import { SettingsFacade } from '../../../../../store/settings/settings.facade';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [LetDirective, NgOptimizedImage, IconPipe, AvatarComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements Modal {
  @Input() closeAction: () => void;

  readonly versions$ = this.settingsFacade.versions$;
  readonly vm$ = this.userFacade.vm$;

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly modalService: ModalService,
    private readonly userFacade: UserFacade,
  ) {}

  openTelegramDesktop(): void {
    this.modalService.open({ component: TelegramDesktopComponent });
  }

  openVersion(): void {
    this.modalService.open({ component: VersionComponent });
  }

  openAbout(): void {
    this.modalService.open({ component: AboutComponent });
  }
}
