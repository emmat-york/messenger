import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {}
