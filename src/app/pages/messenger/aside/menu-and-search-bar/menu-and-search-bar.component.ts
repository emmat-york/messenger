import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
} from '@angular/core';
import { IconPipe } from '../../../../shared/pipes/icon.pipe';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ModalService } from '../../../../shared/services/app/modal/modal.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AsideView } from '../aside.interface';
import { AsideFacade } from '../../../../store/aside/aside.facade';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SLEEPY_OPTIONS } from '../../../../shared/constants/form.constant';

@Component({
  selector: 'app-menu-and-search-bar',
  standalone: true,
  templateUrl: 'menu-and-search-bar.component.html',
  styleUrl: 'menu-and-search-bar.component.scss',
  imports: [IconPipe, NgOptimizedImage, NgIf, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAndSearchBarComponent implements OnInit {
  @Input() view: AsideView = 'dialogs';

  readonly searchControl = new FormControl('', { nonNullable: true });

  constructor(
    private readonly modalService: ModalService,
    private readonly asideFacade: AsideFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.subscribeToSearchControl();
  }

  onChangeView(event: Event, mode: AsideView): void {
    event.stopImmediatePropagation();
    event.preventDefault();

    if (this.view === 'search-panel' && mode === 'search-panel') {
      return;
    }

    this.asideFacade.setViewType(mode);
    this.asideFacade.setSearchRequest('');
    this.searchControl.setValue('', SLEEPY_OPTIONS);
  }

  openUserMenu(): void {
    this.modalService.open({
      component: UserMenuComponent,
      settings: { type: 'aside' },
    });
  }

  private subscribeToSearchControl(): void {
    this.searchControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(v => this.asideFacade.setSearchRequest(v));
  }
}
