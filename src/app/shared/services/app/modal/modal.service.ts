import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { ModalFrameComponent } from './modal-frame-component/modal-frame.component';
import { Constructor } from '../../../interfaces/common.interface';
import { Observable, Subject } from 'rxjs';
import { ModalSettings } from './interfaces/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private viewRef?: ViewContainerRef;
  private modalRefs: ComponentRef<ModalFrameComponent<object, any>>[] = [];

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  get isModalOpened(): boolean {
    return !!this.modalRefs.length;
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

    if (!settings?.multi) {
      this.dismissAll();
    }

    const instance = modalRef.instance;
    const destroy$ = new Subject<Action>();

    instance.component = component;
    instance.closeAction = (action: Action) => {
      this.modalRefs = this.modalRefs.filter(ref => ref === modalRef);
      destroy$.next(action);
      destroy$.complete();
      modalRef.destroy();
    };

    instance.modalData = modalData ? modalData : ({} as ModalData);
    instance.settings = settings ? settings : {};

    this.modalRefs.push(modalRef);

    return destroy$.asObservable();
  }

  dismissAll(): void {
    this.modalRefs.forEach(modalRef => modalRef.instance.closeAction(undefined));
    this.modalRefs = [];
  }
}
