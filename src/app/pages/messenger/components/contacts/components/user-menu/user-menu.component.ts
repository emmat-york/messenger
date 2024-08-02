import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalWithData } from '../../../../../../shared/services/app/modal/interfaces/modal.interface';
import { UserMenuModalData } from './interfaces/user-menu.interface';
import { LetDirective } from '@ngrx/component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [LetDirective, NgOptimizedImage, NgIf, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements ModalWithData<UserMenuModalData> {
  @Input() modalData: UserMenuModalData;
  @Input() closeAction: () => void;
}
