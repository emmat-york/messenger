import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.scss'],
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
