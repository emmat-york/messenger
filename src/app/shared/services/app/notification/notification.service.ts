import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../../../components/notification/notification.component';
import {
  ModalConfig,
  ModalSettings,
} from '../../../components/notification/interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private modalRef: ComponentRef<NotificationComponent> | undefined;
  private _viewRef: ViewContainerRef | undefined;
  private readonly timeOut = 7000;

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

    this.modalRef.instance.type = type;
    this.modalRef.instance.message = message;
    this.modalRef.instance.closeAction = () => this.modalRef?.destroy();
    this.modalRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyModalRef(), timeOut ?? this.timeOut);
  }

  private destroyModalRef(): void {
    this.modalRef?.destroy();
    this.modalRef = undefined;
  }
}
