import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../shared/pipes/icon.pipe';
import { MenuAndSearchBarComponent } from './menu-and-search-bar/menu-and-search-bar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AsideView } from './aside.interface';
import { ChatFacade } from '../../../store/chat/chat.facade';
import { UserFacade } from '../../../store/user/user.facade';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: 'aside.component.html',
  styleUrl: 'aside.component.scss',
  imports: [
    MenuAndSearchBarComponent,
    SearchPanelComponent,
    NgOptimizedImage,
    DialogsComponent,
    LetDirective,
    IconPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  readonly userVm$ = this.userFacade.vm$;
  readonly chatVm$ = this.chatFacade.vm$;

  view: AsideView = 'dialogs';

  constructor(
    private readonly chatFacade: ChatFacade,
    private readonly userFacade: UserFacade,
  ) {}

  changeView(view: AsideView): void {
    this.view = view;
  }
}
