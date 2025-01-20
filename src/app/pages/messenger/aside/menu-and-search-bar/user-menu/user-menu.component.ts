import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
} from '@angular/core';
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
import { SwitcherComponent } from '../../../../../shared/components/switcher/switcher.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LogOutComponent } from './log-out/log-out.component';
import { SLEEPY_OPTIONS } from '../../../../../shared/constants/form.constant';
import { ContactsModalComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [
    LetDirective,
    NgOptimizedImage,
    IconPipe,
    AvatarComponent,
    NgIf,
    SwitcherComponent,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements OnInit, Modal {
  @Input() closeAction: () => void;

  readonly versions$ = this.settingsFacade.versions$;
  readonly vm$ = this.userFacade.vm$;

  readonly themeModeSwitcher = new FormControl(
    { value: false, disabled: true },
    { nonNullable: true },
  );

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly modalService: ModalService,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.subscribeToThemeModeSwitcher();
  }

  onContactsModalOpen(): void {
    this.modalService.open({
      component: ContactsModalComponent,
      settings: { multi: true },
    });
  }

  onModeChange(): void {
    this.settingsFacade.setNightMode(!this.themeModeSwitcher.value);
  }

  openTelegramDesktop(): void {
    this.modalService.open({ component: TelegramDesktopComponent });
  }

  openVersion(): void {
    this.modalService.open({ component: VersionComponent });
  }

  openAbout(): void {
    this.modalService.open({ component: AboutComponent });
  }

  openLogOut(): void {
    this.modalService.open({ component: LogOutComponent });
  }

  private subscribeToThemeModeSwitcher(): void {
    this.settingsFacade.isNightMode$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isNightMode => {
        this.themeModeSwitcher.setValue(isNightMode, SLEEPY_OPTIONS);
      });
  }
}
