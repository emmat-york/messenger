import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsFacade } from './store/settings/settings.facade';
import { DOCUMENT, NgClass } from '@angular/common';
import { PushPipe } from '@ngrx/component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, PushPipe],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DestroyRef) private readonly destroyRef: DestroyRef,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly settingsFacade: SettingsFacade,
  ) {}

  ngOnInit(): void {
    this.subscribeToTheme();
  }

  private subscribeToTheme(): void {
    this.settingsFacade.theme$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(theme => {
        this.document.body.setAttribute('class', theme);
      });
  }
}
