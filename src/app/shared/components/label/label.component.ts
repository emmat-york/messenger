import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template: '<label [for]="for"><ng-content></ng-content></label>',
  styleUrls: ['label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() for!: string;
}
