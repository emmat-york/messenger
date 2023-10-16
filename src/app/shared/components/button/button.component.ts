import { Component, Input } from '@angular/core';
import { ButtonType, ButtonVariants } from './interfaces/button.interfaces';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [type]="type" [disabled]="disabled">
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() variant: ButtonVariants = 'secondary';
  @Input() disabled = false;
}
