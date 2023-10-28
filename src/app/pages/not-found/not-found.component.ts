import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: ` <section class="not-found">
    <h1>Page not found</h1>
    <app-button variant="tertiary" routerLink="/">Get back</app-button>
  </section>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, RouterLink],
})
export class NotFoundComponent {}
