import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../../../../shared/services/app/modal/interfaces/modal.interface';
import { ModalService } from '../../../../../../../../shared/services/app/modal/modal.service';
import { VersionComponent } from '../version/version.component';
import { SettingsFacade } from '../../../../../../../../store/settings/settings.facade';
import { PushPipe } from '@ngrx/component';
import { LinkComponent } from '../../../../../../../../shared/components/link/link.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss',
  imports: [ButtonComponent, PushPipe, LinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements Modal {
  readonly version$ = this.settingsFacade.version$;

  closeAction: () => void;

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly modalService: ModalService,
  ) {}

  openVersion(): void {
    this.modalService.open({ component: VersionComponent });
  }
}
