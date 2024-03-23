import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../../../components/notification/notification.component';
import {
  ModalConfig,
  ModalSettings,
} from '../../../components/notification/interfaces/notification.interface';
import {
  DEFAULT_NOTIFICATION_DURATION,
  INDENT_BETWEEN_NOTIFICATIONS,
  VIEW_REF_ERROR_MESSAGE,
} from './constants/notification.constant';

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

  private get previousElementsTotalHeight(): number {
    return this.modalRefs.reduce((totalHeight, ref, index) => {
      if (index === this.modalRefs.length - 1) {
        return totalHeight;
      }

      return totalHeight + ref.location.nativeElement.offsetHeight;
    }, 0);
  }

  success(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'success', settings });
  }

  warning(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'warning', settings });
  }

  error(message: string, settings?: ModalSettings): void {
    this.openModal({ message, type: 'error', settings });
  }

  private openModal({ message, type, settings }: ModalConfig): void {
    if (!this.viewRef) {
      throw new Error(VIEW_REF_ERROR_MESSAGE);
    }

    const ref = this.viewRef.createComponent(NotificationComponent);
    const { timeOut } = settings || {};

    ref.setInput('type', type);
    ref.setInput('message', message);
    ref.setInput('closeAction', () => ref.destroy());

    this.modalRefs.push(ref);

    if (this.modalRefs.length > 1) {
      requestAnimationFrame(() => {
        const element = ref.location.nativeElement as HTMLElement;

        element.style.bottom =
          this.previousElementsTotalHeight +
          this.modalRefs.length * INDENT_BETWEEN_NOTIFICATIONS +
          'px';
      });
    }

    setTimeout(
      () => this.destroyModalRef(ref),
      timeOut ?? DEFAULT_NOTIFICATION_DURATION,
    );
  }

  private destroyModalRef(modalRef: ComponentRef<NotificationComponent>): void {
    this.modalRefs = this.modalRefs.filter(ref => ref !== modalRef);
    modalRef.destroy();
  }
}
