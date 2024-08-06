import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template:
    '<label class="label" [for]="for"><ng-content></ng-content></label>',
  styles: `.label {
      font-size: 13px;
      font-weight: var(--font_weight_regular);
      line-height: 15px;
      font-style: normal;
      color: var(--black1);
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() for = '';
}
