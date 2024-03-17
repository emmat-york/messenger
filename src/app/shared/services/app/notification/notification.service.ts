import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
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
  private modalRef: ComponentRef<NotificationComponent> | undefined;
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

    if (this.modalRef) {
      this.destroyModalRef();
    }

    const { timeOut } = settings || {};

    this.modalRef = this.viewRef.createComponent<NotificationComponent>(
      NotificationComponent,
    );

    this.modalRef.setInput('type', type);
    this.modalRef.setInput('message', message);
    this.modalRef.setInput('closeAction', () => this.modalRef?.destroy());

    this.modalRef.changeDetectorRef.detectChanges();

    setTimeout(
      () => this.destroyModalRef(),
      timeOut ?? DEFAULT_NOTIFICATION_TIME,
    );
  }

  private destroyModalRef(): void {
    this.modalRef?.destroy();
    this.modalRef = undefined;
  }
}
