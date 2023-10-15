import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {}
