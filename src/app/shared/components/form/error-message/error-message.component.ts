import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-error-message',
    standalone: true,
    template: '<ng-content></ng-content>',
    styleUrls: ['error-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {}
