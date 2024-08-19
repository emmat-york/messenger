import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant = 'regular' | 'line' | 'commerce' | 'publicLink' | 'text';
export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <button
    class="button"
    [disabled]="disabled"
    [ngClass]="'variant-' + variant"
    [type]="type"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['button.component.scss'],
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'regular';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
}
