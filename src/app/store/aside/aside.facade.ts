import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AsideState, selectAsideState } from './aside.feature';
import * as action from './aside.action';
import { AsideView } from '../../pages/messenger/aside/aside.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideFacade {
  readonly vm$: Observable<AsideState> = this.store.select(selectAsideState);

  constructor(private readonly store: Store) {}

  setViewType(viewType: AsideView): void {
    this.dispatch(action.setViewType({ viewType }));
  }

  setSearchRequest(searchRequest: string): void {
    this.dispatch(action.setSearchRequest({ searchRequest }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
