import { DestroyRef, inject, Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions) {}

  private destroyRef = inject(DestroyRef);
}
