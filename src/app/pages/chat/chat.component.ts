import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {}
