import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ChatFacade} from "../../store/chat/chat.facade";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ChatComponent} from "./components/chat/chat.component";

@Component({
  selector: 'messenger',
  standalone: true,
  templateUrl: 'messenger.component.html',
  styleUrl: 'messenger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContactsComponent,
    ChatComponent
  ]
})
export class MessengerComponent {
  constructor(private readonly chatFacade: ChatFacade) {}
}
