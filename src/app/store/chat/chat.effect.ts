import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

@Injectable()
export class ChatEffect {
  constructor(private readonly store: Store) {}
}
