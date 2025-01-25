import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class BaseStoreExtension {
  constructor(protected readonly store: Store) {}

  protected dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
