import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Dialog } from '../../../../../../store/user/user.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: 'dialog.component.html',
  styleUrl: 'dialog.component.scss',
  imports: [DatePipe, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @Input() dialog: Dialog;
}
