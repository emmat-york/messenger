import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '../../shared/services/facades/auth.facade';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
  imports: [RouterOutlet],
  providers: [AuthFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
