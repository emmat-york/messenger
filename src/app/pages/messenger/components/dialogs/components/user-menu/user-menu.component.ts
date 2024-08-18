import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalWithData } from '../../../../../../shared/services/app/modal/interfaces/modal.interface';
import { UserMenuModalData } from './interfaces/user-menu.interface';
import { LetDirective } from '@ngrx/component';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';
import { ModalService } from '../../../../../../shared/services/app/modal/modal.service';
import { AboutComponent } from './components/about/about.component';
import { VersionComponent } from './components/version/version.component';
import { TelegramDesktopComponent } from './components/telegram-desktop/telegram-desktop.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [LetDirective, NgOptimizedImage, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements ModalWithData<UserMenuModalData> {
  modalData: UserMenuModalData;
  closeAction: () => void;

  constructor(private readonly modalService: ModalService) {}

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
