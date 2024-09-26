import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { MenuAndSearchBarComponent } from './menu-and-search-bar/menu-and-search-bar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AsideView } from './aside.interface';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: 'aside.component.html',
  styleUrl: 'aside.component.scss',
  imports: [
    MenuAndSearchBarComponent,
    SearchPanelComponent,
    NgOptimizedImage,
    DialogsComponent,
    IconPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  view: AsideView = 'dialogs';

  onShowSearchPanel(): void {
    if (this.view === 'search-panel') {
      return;
    }

    this.view = 'search-panel';
  }

  onShowDialogs(): void {
    this.view = 'dialogs';
  }
}
