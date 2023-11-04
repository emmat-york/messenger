import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrls: ['messenger.component.scss'],
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent {}
