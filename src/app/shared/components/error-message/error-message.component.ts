import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: `{{ message }}`,
  styles: `:host {
      font-size: 13px;
      font-weight: var(--regular_weight);
      line-height: 25px;
      color: var(--red3);
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input() controlErrors: ValidationErrors = {};
  @Input() errorState: ValidationErrors = {};

  get message(): string {
    const key = Object.keys(this.controlErrors)[0];
    return this.errorState[key];
  }
}
