import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalWithData } from '../../services/app/modal/interfaces/modal.interface';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: 'confirmation-modal.component.html',
  styleUrl: 'confirmation-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationModalComponent implements ModalWithData<any, any> {
  @Input() closeAction!: (action?: any) => void;
  @Input() modalData!: any;
}
