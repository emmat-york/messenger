import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

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
