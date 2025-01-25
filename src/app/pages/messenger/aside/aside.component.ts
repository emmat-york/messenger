import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuAndSearchBarComponent } from './menu-and-search-bar/menu-and-search-bar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { LetDirective } from '@ngrx/component';
import { AsideFacade } from '../../../store/aside/aside.facade';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: 'aside.component.html',
  styleUrl: 'aside.component.scss',
  imports: [MenuAndSearchBarComponent, DialogsComponent, LetDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  readonly asideVm$ = this.asideFacade.vm$;

  constructor(private readonly asideFacade: AsideFacade) {}
}
