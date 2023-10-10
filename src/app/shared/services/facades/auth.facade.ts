import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import * as selectors from '../../../store/selectors/auth.selectors';

@Injectable()
export class AuthFacade {
    isAuth$ = this.store.select(selectors.isAuth);

    constructor(private store: Store) {}

    private dispatch(action: Action): void {
        this.store.dispatch(action);
    }
}
