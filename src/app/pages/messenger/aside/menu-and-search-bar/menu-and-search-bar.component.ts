import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-and-search-bar',
  standalone: true,
  templateUrl: 'menu-and-search-bar.component.html',
  styleUrl: 'menu-and-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAndSearchBarComponent {}
