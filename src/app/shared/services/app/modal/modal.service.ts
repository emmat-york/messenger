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
  private modalRefs: ComponentRef<ModalFrameComponent<object, any>>[] = [];
  private viewRef: ViewContainerRef;

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  get hasOpenedModal(): boolean {
    return Boolean(this.modalRefs.length);
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
      this.viewRef.createComponent<ModalFrameComponent<ModalData, Action>>(
        ModalFrameComponent,
      );

    const destroy$ = new Subject<Action>();

    this.modalRefs.push(modalRef);

    modalRef.setInput('component', component);
    modalRef.setInput('closeAction', (action: Action) => {
      this.modalRefs = this.modalRefs.filter((ref) => ref !== modalRef);
      destroy$.next(action);
      destroy$.complete();
      modalRef.destroy();
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
    this.modalRefs.forEach((modalRef) => modalRef.instance.closeAction());
    this.modalRefs = [];
  }
}
