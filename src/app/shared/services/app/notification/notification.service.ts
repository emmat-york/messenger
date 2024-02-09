import { Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../../../components/notification/notification.component';
import { ModalConfig } from '../../../components/notification/interfaces/notification.interface';

@Injectable()
export class NotificationService {
  private _viewRef: ViewContainerRef | undefined;
  private timeOut = 5000;

  set viewRef(ref: ViewContainerRef) {
    this._viewRef = ref;
  }

  get viewRef(): ViewContainerRef | undefined {
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
    if (!this.viewRef) {
      throw new Error(
        "In order to use NotificationService you gotta set 'viewRef' property!",
      );
    }

    const modalRef = this.viewRef.createComponent<NotificationComponent>(
      NotificationComponent,
    );

    modalRef.instance.type = type;
    modalRef.instance.message = message;
    modalRef.instance.closeAction = () => modalRef.destroy();
    modalRef.changeDetectorRef.detectChanges();

    setTimeout(() => modalRef.destroy(), this.timeOut);
  }
}
