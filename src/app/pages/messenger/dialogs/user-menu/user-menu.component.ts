import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { VersionComponent } from './version/version.component';
import { TelegramDesktopComponent } from './telegram-desktop/telegram-desktop.component';
import { IconPipe } from '../../../../shared/pipes/icon.pipe';
import { Modal } from '../../../../shared/services/app/modal/modal.interface';
import { SettingsFacade } from '../../../../store/settings/settings.facade';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserFacade } from '../../../../store/user/user.facade';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [LetDirective, NgOptimizedImage, IconPipe, AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements Modal {
  readonly version$ = this.settingsFacade.version$;
  readonly vm$ = this.userFacade.vm$;

  closeAction: () => void;

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
