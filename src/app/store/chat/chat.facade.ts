import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {setInput} from "./chat.action";
import {chatVM} from "./chat.feature";

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  chatVM$ = this.store.select(chatVM);

  constructor(private readonly store: Store) {}

  setInput(input: string): void {
    this.dispatch(setInput({ input }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
