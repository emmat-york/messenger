import { ApplicationRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Constructor } from '../../../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private viewRef!: ViewContainerRef;

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  open<T extends object, D>(
    component: Constructor,
    settings?: any,
  ): Observable<D> {
    return of(false);
  }
}
