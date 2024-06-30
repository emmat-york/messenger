import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  styles: `:host {
      display: block;
      height: 100%;
    }`,
  imports: [RouterOutlet, NgClass, PushPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
