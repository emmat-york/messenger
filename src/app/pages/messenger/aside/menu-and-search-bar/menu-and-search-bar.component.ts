import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconPipe } from '../../../../shared/pipes/icon.pipe';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AsideView } from '../aside.interface';

@Component({
  selector: 'app-menu-and-search-bar',
  standalone: true,
  templateUrl: 'menu-and-search-bar.component.html',
  styleUrl: 'menu-and-search-bar.component.scss',
  imports: [IconPipe, NgOptimizedImage, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAndSearchBarComponent {
  @Input() view: AsideView = 'dialogs';

  @Output() private readonly closeSearchPanel = new EventEmitter<void>();

  constructor(private readonly modalService: ModalService) {}

  onCloseSearchPanel(event: Event): void {
    event.stopImmediatePropagation();
    event.preventDefault();
    this.closeSearchPanel.emit();
  }

  openUserMenu(): void {
    this.modalService.open({
      component: UserMenuComponent,
      settings: { type: 'aside' },
    });
  }
}
