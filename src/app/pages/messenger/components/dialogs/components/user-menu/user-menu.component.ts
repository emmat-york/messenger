import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalWithData } from '../../../../../../shared/services/app/modal/interfaces/modal.interface';
import { UserMenuModalData } from './interfaces/user-menu.interface';
import { LetDirective } from '@ngrx/component';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../../shared/pipes/icon/icon.pipe';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [LetDirective, NgOptimizedImage, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements ModalWithData<UserMenuModalData> {
  modalData: UserMenuModalData;
  closeAction: () => void;
}
