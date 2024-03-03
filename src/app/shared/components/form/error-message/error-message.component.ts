import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input() controlErrorState: any;
  @Input() controlErrors: any;

  get message(): string {
    const key = Object.keys(this.controlErrors)[0];
    return this.controlErrorState[key];
  }
}
