import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: 'aside.component.html',
  styleUrl: 'aside.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {}
