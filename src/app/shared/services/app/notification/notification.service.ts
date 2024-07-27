import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private modalRefs: ComponentRef<any>[] = [];
  private viewRef!: ViewContainerRef;

  constructor(private readonly appRef: ApplicationRef) {
    requestAnimationFrame(() => {
      this.viewRef = this.appRef.components[0].injector.get(ViewContainerRef);
    });
  }

  success(message: string): void {
    this.openModal({ message, type: 'success' });
  }

  warning(message: string): void {
    this.openModal({ message, type: 'warning' });
  }

  error(message: string): void {
    this.openModal({ message, type: 'error' });
  }

  private openModal({
    message,
    type,
  }: {
    message: string;
    type: 'success' | 'warning' | 'error';
  }): void {}
}
