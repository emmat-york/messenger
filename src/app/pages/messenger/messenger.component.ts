import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ChatFacade} from "../../store/chat/chat.facade";

@Component({
  selector: 'messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessengerComponent {
  constructor(private readonly chatFacade: ChatFacade) {}
}
