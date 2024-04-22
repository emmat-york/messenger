import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonMetaData, ButtonType } from './interfaces/button.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <button
    class="button"
    [ngClass]="['variant-' + meta.variant, 'type-' + meta.type]"
    [type]="type"
    [disabled]="disabled"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['button.component.scss'],
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() meta: ButtonMetaData = {
    variant: 'regular',
    type: 'regular',
  };

  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
}
