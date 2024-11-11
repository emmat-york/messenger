import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { LinkComponent } from '../../../../../../shared/components/link/link.component';
import { Modal } from '../../../../../../shared/services/app/modal/modal.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss',
  imports: [ButtonComponent, LinkComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements Modal {
  @Input() closeAction: () => void;
}
