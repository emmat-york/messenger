import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Modal } from '../../../../../../../../shared/services/app/modal/modal.interface';
import { ButtonComponent } from '../../../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-telegram-desktop',
  standalone: true,
  templateUrl: 'telegram-desktop.component.html',
  styleUrl: 'telegram-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class TelegramDesktopComponent implements Modal {
  closeAction: () => void;
}
