import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  templateUrl: 'radio-button.component.html',
  styleUrl: 'radio-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {}
