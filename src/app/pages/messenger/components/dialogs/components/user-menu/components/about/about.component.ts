import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../../../../shared/services/app/modal/interfaces/modal.interface';
import { ModalService } from '../../../../../../../../shared/services/app/modal/modal.service';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements Modal {
  closeAction: () => void;

  constructor(private readonly modalService: ModalService) {}

  openVersion(): void {
    this.modalService.open({ component: VersionComponent });
  }
}
