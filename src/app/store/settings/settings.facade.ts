import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  constructor(private readonly store: Store) {}
}
