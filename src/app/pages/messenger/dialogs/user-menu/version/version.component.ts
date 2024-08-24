import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../shared/services/app/modal/modal.interface';
import { SettingsFacade } from '../../../../../store/settings/settings.facade';
import { LetDirective } from '@ngrx/component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-version',
  standalone: true,
  templateUrl: 'version.component.html',
  styleUrl: 'version.component.scss',
  imports: [ButtonComponent, LetDirective, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionComponent implements Modal {
  readonly versions$ = this.settingsFacade.versions$;

  closeAction: () => void;

  constructor(private readonly settingsFacade: SettingsFacade) {}
}
