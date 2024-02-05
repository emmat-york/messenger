import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {setInput} from "./chat.action";
import {selectInput} from "./chat.selector";

@Injectable({
  providedIn: 'root',
})
export class ChatFacade {
  input$ = this.store.select(selectInput);

  constructor(private readonly store: Store) {}

  setInput(input: string): void {
    this.dispatch(setInput({ input }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
