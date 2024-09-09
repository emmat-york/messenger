import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { MenuAndSearchBarComponent } from './menu-and-search-bar/menu-and-search-bar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  template: `
    <app-menu-and-search-bar (click)="onChangeView()"></app-menu-and-search-bar>

    @switch (view) { @case ('dialogs') {
    <app-dialogs class="content"></app-dialogs>
    } @case ('search-panel') {
    <app-search-panel class="content"></app-search-panel>
    } }
  `,
  styles: `
      $search-height: 56px;

      :host {
        display: block;
      }

      .content {
        height: calc(100% - $search-height);
      }
    `,
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
