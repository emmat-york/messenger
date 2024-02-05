import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'chat-body',
  standalone: true,
  templateUrl: 'chat-body.component.html',
  styleUrl: 'chat-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBodyComponent {}
