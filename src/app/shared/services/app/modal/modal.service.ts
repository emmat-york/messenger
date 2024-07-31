import { ApplicationRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalFrameComponent } from './modal-frame-component/modal-frame.component';
import { Constructor } from '../../../interfaces/common.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private viewRef?: ViewContainerRef;

  constructor(private readonly appRef: ApplicationRef) {
    this.setViewRef();
  }

  open(
    component: Constructor,
    settings?: { type?: 'aside' | 'middle' },
  ): Observable<void> {
    const modalRef = this.viewRef?.createComponent(ModalFrameComponent);
    const destroy$ = new Subject<void>();

    if (!modalRef) {
      throw new Error(
        'Modal component could not be created due to there is no viewRef for ModalService.',
      );
    }

    modalRef.instance.component = component;
    modalRef.instance.closeAction = () => modalRef.destroy();
    modalRef.instance.destroy$ = destroy$;

    if (settings && settings.type) {
      modalRef.instance.type = settings.type;
    }

    return destroy$;
  }

  private setViewRef(): void {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }
}
