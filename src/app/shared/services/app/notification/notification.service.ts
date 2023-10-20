import { Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../../../components/notification/notification.component';
import { ModalConfig } from '../../../components/notification/interfaces/notification.interfaces';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _viewRef!: ViewContainerRef;
  private timeOut = 50000;

  set viewRef(ref: ViewContainerRef) {
    this._viewRef = ref;
  }

  get viewRef(): ViewContainerRef {
    return this._viewRef;
  }

  showSuccess(message: string): void {
    this.openModal({ message, type: 'success' });
  }

  showWarning(message: string): void {
    this.openModal({ message, type: 'warning' });
  }

  showError(message: string): void {
    this.openModal({ message, type: 'error' });
  }

  private openModal({ message, type }: ModalConfig): void {
    const modalRef =
      this.viewRef.createComponent<NotificationComponent>(NotificationComponent);

    modalRef.instance.type = type;
    modalRef.instance.message = message;
    modalRef.instance.closeAction = () => modalRef.destroy();
    modalRef.changeDetectorRef.detectChanges();

    setTimeout(() => modalRef.destroy(), this.timeOut);
  }
}
