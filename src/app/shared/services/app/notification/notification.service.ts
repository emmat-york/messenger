import {
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { NotificationComponent } from '../../../components/notification/notification.component';
import {
  ModalConfig,
  ModalSettings,
} from '../../../components/notification/interfaces/notification.interface';
import { DEFAULT_NOTIFICATION_TIME } from './constants/notification.constant';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private modalRefs: ComponentRef<NotificationComponent>[] = [];
  private _viewRef: ViewContainerRef | undefined;

  set viewRef(ref: ViewContainerRef) {
    this._viewRef = ref;
  }

  get viewRef(): ViewContainerRef | undefined {
    return this._viewRef;
  }

  showSuccess(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'success', settings });
  }

  showWarning(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'warning', settings });
  }

  showError(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'error', settings });
  }

  private openModal({ message, type, settings }: ModalConfig): void {
    if (!this.viewRef) {
      throw new Error(
        "In order to use NotificationService you gotta set 'viewRef' property!",
      );
    }

    const { timeOut } = settings || {};

    const newModalRef = this.viewRef.createComponent<NotificationComponent>(
      NotificationComponent,
    );

    this.modalRefs.push(newModalRef);

    newModalRef.setInput('type', type);
    newModalRef.setInput('message', message);
    newModalRef.setInput('closeAction', () => newModalRef.destroy());

    if (this.modalRefs.length > 1) {
      requestAnimationFrame(() => {
        const elementRef = newModalRef.location
            .nativeElement as HTMLUnknownElement;

        const commonHeight = this.modalRefs.reduce((totalHeight, ref, index) => {
          if (index === this.modalRefs.length - 1) {
            return totalHeight;
          }

          return totalHeight + ref.location.nativeElement.offsetHeight;
        }, 0);

        elementRef.style.bottom = commonHeight + this.modalRefs.length * 20 + 'px';
      });
    }

    setTimeout(
      () => this.destroyModalRef(newModalRef),
      timeOut ?? DEFAULT_NOTIFICATION_TIME,
    );
  }

  private destroyModalRef(modalRef: ComponentRef<NotificationComponent>): void {
    this.modalRefs = this.modalRefs.filter(ref => ref !== modalRef);
    modalRef?.destroy();
  }
}
