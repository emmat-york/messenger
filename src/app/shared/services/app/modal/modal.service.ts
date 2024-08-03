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
    this.setViewRef();
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

    const destroy$ = new Subject<Action>();

    modalRef.instance.component = component;
    modalRef.instance.closeAction = (action: Action) => {
      modalRef.destroy();
      destroy$.next(action);
      destroy$.complete();
    };

    modalRef.instance.modalData = modalData ? modalData : ({} as ModalData);
    modalRef.instance.settings = settings ? settings : ({} as ModalSettings);

    return destroy$.asObservable();
  }

  private setViewRef(): void {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }
}
