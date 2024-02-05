import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SettingsFacade} from "./store/settings/settings.facade";
import {NgClass} from "@angular/common";
import {PushPipe} from "@ngrx/component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, PushPipe],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  theme$ = this.settingsFacade.theme$;

  constructor(private readonly settingsFacade: SettingsFacade) {}
}
