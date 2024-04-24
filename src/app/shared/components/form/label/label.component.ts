import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template:
    '<label class="label" [for]="for"><ng-content></ng-content></label>',
  styles: `.label {
    font-size: 15px;
    font-weight: var(--medium_weight);
    line-height: 18px;
    color: var(--black1);
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() for!: string;
}
