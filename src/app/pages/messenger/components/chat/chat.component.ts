import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ChatFacade} from "../../../../store/chat/chat.facade";

@Component({
  selector: 'chat',
  standalone: true,
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  constructor(private readonly chatFacade: ChatFacade) {}
}
