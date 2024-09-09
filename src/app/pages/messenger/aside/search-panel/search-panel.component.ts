import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  templateUrl: 'search-panel.component.html',
  styleUrl: 'search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {}
