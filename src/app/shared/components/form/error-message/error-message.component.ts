import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [':host { color: red }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {}
