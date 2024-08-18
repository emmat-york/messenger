import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkTarget } from './interfaces/link.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  template: `<a class="link" [href]="href" [target]="target">
    <ng-content></ng-content>
  </a>`,
  styles: `:host {
      display: inline-block;
    }

    .link {
      color: var(--blue_light8);

      &:hover {
        text-decoration: underline;
      }
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() target: LinkTarget = '_blank';
  @Input() href = '';
}
