import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoComponent {}
