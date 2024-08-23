import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../shared/services/app/modal/modal.interface';

@Component({
  selector: 'app-version',
  standalone: true,
  templateUrl: 'version.component.html',
  styleUrl: 'version.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionComponent implements Modal {
  closeAction: () => void;
}
