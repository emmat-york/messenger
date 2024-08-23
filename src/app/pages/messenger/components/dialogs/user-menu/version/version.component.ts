import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-version',
  standalone: true,
  templateUrl: 'version.component.html',
  styleUrl: 'version.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class VersionComponent implements Modal {
  closeAction: () => void;
}
