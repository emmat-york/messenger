import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [RouterOutlet, NgClass, PushPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
