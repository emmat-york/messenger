import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {}
