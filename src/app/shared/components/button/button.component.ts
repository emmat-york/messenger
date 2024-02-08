import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonType, ButtonVariant } from './interfaces/button.interface';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    template: ` <button
    class="button"
    [ngClass]="variant"
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
    @Input() type: ButtonType = 'button';
    @Input() variant: ButtonVariant = 'primary';
    @Input() disabled = false;
}
