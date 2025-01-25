import { Injectable } from '@angular/core';
import { AsideState, selectAsideState } from './aside.feature';
import * as action from './aside.action';
import { resetAsideReducer } from './aside.action';
import { AsideView } from '../../pages/messenger/aside/aside.interface';
import { Observable } from 'rxjs';
import { BaseStoreExtension } from '../base-store-extension';

@Injectable({
  providedIn: 'root',
})
export class AsideFacade extends BaseStoreExtension {
  readonly vm$: Observable<AsideState> = this.store.select(selectAsideState);

  setViewType(viewType: AsideView): void {
    this.dispatch(action.setViewType({ viewType }));
  }

  setSearchRequest(searchRequest: string): void {
    this.dispatch(action.setSearchRequest({ searchRequest }));
  }

  resetAsideReducer(): void {
    this.dispatch(resetAsideReducer());
  }
}
