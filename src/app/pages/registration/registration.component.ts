import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'registration',
  standalone: true,
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {}
