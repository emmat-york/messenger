import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorState } from '../../../interfaces/form.interface';
import { ValidatorKeys } from '../../../enums/validator-keys.enum';

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input() controlErrors: Partial<Record<ValidatorKeys, any>> = {};
  @Input() errorState: ErrorState = {};

  get message(): string {
    const errorKey = Object.keys(this.controlErrors)[0] as ValidatorKeys;
    return this.errorState[errorKey] || 'Unknown error';
  }
}
