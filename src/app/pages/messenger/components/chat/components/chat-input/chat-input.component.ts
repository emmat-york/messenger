import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'chat-input',
  standalone: true,
  templateUrl: 'chat-input.component.html',
  styleUrl: 'chat-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInputComponent {}
