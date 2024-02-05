import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ChatFacade} from "../../../../store/chat/chat.facade";
import {ChatBodyComponent} from "./components/chat-body/chat-body.component";
import {ChatInputComponent} from "./components/chat-input/chat-input.component";

@Component({
  selector: 'chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ChatBodyComponent,
    ChatInputComponent
  ]
})
export class ChatComponent {
  constructor(private readonly chatFacade: ChatFacade) {}
}
