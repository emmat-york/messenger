import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  standalone: true,
  templateUrl: 'scroll-bar.component.html',
  styleUrl: 'scroll-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollBarComponent {}
