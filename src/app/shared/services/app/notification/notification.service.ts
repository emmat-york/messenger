import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import {
  DEFAULT_NOTIFICATION_DURATION,
  INDENT_BETWEEN_NOTIFICATIONS,
} from './constants/notification.constant';

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

  private get nextElementPosition(): string {
    return (
      this.previousElementsTotalHeight +
      this.modalRefs.length * INDENT_BETWEEN_NOTIFICATIONS +
      'px'
    );
  }

  private get previousElementsTotalHeight(): number {
    return this.modalRefs.reduce((totalHeight, ref, index) => {
      if (index === this.modalRefs.length - 1) {
        return totalHeight;
      }

      return totalHeight + ref.location.nativeElement.offsetHeight;
    }, 0);
  }

  success(message: string, settings?: {}): void {
    this.openModal({ message, type: 'success', settings });
  }

  warning(message: string, settings?: {}): void {
    this.openModal({ message, type: 'warning', settings });
  }

  error(message: string, settings?: {}): void {
    this.openModal({ message, type: 'error', settings });
  }

  private openModal({ message, type, settings }: any): void {
    const ref = this.viewRef.createComponent({} as any);
    const { timeOut } = settings || {};

    ref.setInput('type', type);
    ref.setInput('message', message);
    ref.setInput('closeAction', () => ref.destroy());

    this.modalRefs.push(ref);

    if (this.modalRefs.length > 1) {
      requestAnimationFrame(() => {
        const element = ref.location.nativeElement as HTMLElement;
        element.style.bottom = this.nextElementPosition;
      });
    }

    setTimeout(() => {
      this.destroyModalRef(ref);
      this.recalculateElementsPosition();
    }, timeOut ?? DEFAULT_NOTIFICATION_DURATION);
  }

  private recalculateElementsPosition(): void {
    this.modalRefs.forEach((ref, index) => {
      const element = ref.location.nativeElement as HTMLElement;
      element.style.bottom = index === 0 ? 20 + 'px' : this.nextElementPosition;
    });
  }

  private destroyModalRef(modalRef: ComponentRef<any>): void {
    this.modalRefs = this.modalRefs.filter(ref => ref !== modalRef);
    modalRef.destroy();
  }
}
