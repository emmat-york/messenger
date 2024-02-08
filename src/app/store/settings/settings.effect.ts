import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsEffect {
  constructor(private readonly store: Store) {}
}
