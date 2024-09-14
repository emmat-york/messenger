import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';

@Component({
  selector: 'app-telegram-desktop',
  standalone: true,
  templateUrl: 'telegram-desktop.component.html',
  styleUrl: 'telegram-desktop.component.scss',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TelegramDesktopComponent implements Modal {
  @Input() closeAction: () => void;
}
