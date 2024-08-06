import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: '<h1>page not found</h1>',
  styles: `:host {
      display: block;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
