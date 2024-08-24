import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VersionComponent } from '../version/version.component';
import { LetDirective } from '@ngrx/component';
import { LinkComponent } from '../../../../../shared/components/link/link.component';
import { Modal } from '../../../../../shared/services/app/modal/modal.interface';
import { SettingsFacade } from '../../../../../store/settings/settings.facade';
import { ModalService } from '../../../../../shared/services/app/modal/modal.service';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss',
  imports: [ButtonComponent, LinkComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements Modal {
  readonly version$ = this.settingsFacade.versions$;

  closeAction: () => void;

  constructor(
    private readonly settingsFacade: SettingsFacade,
    private readonly modalService: ModalService,
  ) {}

  openVersion(): void {
    this.modalService.open({ component: VersionComponent });
  }
}
