import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { ModalFrameComponent } from './modal-frame.component';
import { Constructor } from '../../../interfaces/common.interface';
import { Observable, Subject } from 'rxjs';
import { ModalSettings } from './modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: ComponentRef<ModalFrameComponent<object, any>> | undefined;
  private viewRef: ViewContainerRef | undefined;

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  get hasOpenedModal(): boolean {
    return Boolean(this.modalRef);
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
    if (this.modalRef) {
      this.dismissAll();
    }

    const modalRef =
      this.viewRef?.createComponent<ModalFrameComponent<ModalData, Action>>(
        ModalFrameComponent,
      );

    if (!modalRef) {
      throw new Error(
        'Modal component could not be created due to there is no viewRef for ModalService.',
      );
    }

    this.modalRef = modalRef;

    const destroy$ = new Subject<Action>();

    modalRef.setInput('component', component);
    modalRef.setInput('closeAction', (action?: Action) => {
      destroy$.next(action as Action);
      destroy$.complete();
      modalRef.destroy();
      this.modalRef = undefined;
    });

    if (modalData) {
      modalRef.setInput('modalData', modalData);
    }

    if (settings) {
      modalRef.setInput('settings', settings);
    }

    return destroy$.asObservable();
  }

  dismissAll(): void {
    this.modalRef?.instance.closeAction();
  }
}
