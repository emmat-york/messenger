import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'search-panel',
  standalone: true,
  templateUrl: 'search-panel.component.html',
  styleUrl: 'search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {}
