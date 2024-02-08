import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffect {
  constructor(private readonly store: Store) {}
}
