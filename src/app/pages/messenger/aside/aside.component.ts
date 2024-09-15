import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { MenuAndSearchBarComponent } from './menu-and-search-bar/menu-and-search-bar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: 'aside.component.html',
  styleUrl: 'aside.component.scss',
  imports: [
    NgOptimizedImage,
    IconPipe,
    MenuAndSearchBarComponent,
    DialogsComponent,
    SearchPanelComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  view: 'dialogs' | 'search-panel' = 'dialogs';

  onChangeView(): void {
    this.view = this.view === 'dialogs' ? 'search-panel' : 'dialogs';
  }
}
