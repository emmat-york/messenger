import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IconPipe } from '../../../../shared/pipes/icon.pipe';
import { NgOptimizedImage } from '@angular/common';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-menu-and-search-bar',
  standalone: true,
  templateUrl: 'menu-and-search-bar.component.html',
  styleUrl: 'menu-and-search-bar.component.scss',
  imports: [IconPipe, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAndSearchBarComponent {
  @Output() private readonly changeView = new EventEmitter<void>();

  constructor(private readonly modalService: ModalService) {}

  onChangeView(): void {
    this.changeView.emit();
  }

  openUserMenu(): void {
    this.modalService.open({
      component: UserMenuComponent,
      settings: { type: 'aside' },
    });
  }
}
