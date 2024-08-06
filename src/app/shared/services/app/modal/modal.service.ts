import { ApplicationRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalFrameComponent } from './modal-frame-component/modal-frame.component';
import { Constructor } from '../../../interfaces/common.interface';
import { Observable, Subject } from 'rxjs';
import { ModalSettings } from './interfaces/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private viewRef?: ViewContainerRef;

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  open<ModalData extends object, Action = undefined>({
    component,
    modalData,
    settings,
  }: {
    component: Constructor;
    modalData?: ModalData;
    settings?: ModalSettings;
  }): Observable<Action> {
    const modalRef =
      this.viewRef?.createComponent<ModalFrameComponent<ModalData, Action>>(
        ModalFrameComponent,
      );

    if (!modalRef) {
      throw new Error(
        'Modal component could not be created due to there is no viewRef for ModalService.',
      );
    }

    const instance = modalRef.instance;
    const destroy$ = new Subject<Action>();

    instance.component = component;
    instance.closeAction = (action: Action) => {
      modalRef.destroy();
      destroy$.next(action);
      destroy$.complete();
    };

    instance.modalData = modalData ? modalData : ({} as ModalData);
    instance.settings = settings ? settings : ({} as ModalSettings);

    return destroy$.asObservable();
  }
}
