import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Constructor } from '../../../../interfaces/common.interface';
import { NgClass } from '@angular/common';
import { ModalSettings, ModalWithData } from '../modal.interface';
import { ModalFrameTypePipe } from './modal-frame-type.pipe';

export interface ModalFrame<Action = undefined> {
  component: Constructor;
  closeAction: (action: Action) => void;
  settings: ModalSettings;
}

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  imports: [NgClass, ModalFrameTypePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent<ModalData extends object, Action = undefined>
  implements ModalFrame<Action>, OnInit
{
  closeAction: (action?: Action) => void;
  modalData: ModalData;
  component: Constructor;
  settings: ModalSettings;

  @ViewChild('container', { static: true, read: ViewContainerRef })
  private readonly container?: ViewContainerRef;

  constructor(
    private readonly hostElement: ElementRef<HTMLElement>,
    private readonly renderer2: Renderer2,
  ) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    this.closeAction();
  }

  ngOnInit(): void {
    this.initModalComponent();
    this.setBackdrop();
  }

  private initModalComponent(): void {
    const modalRef = this.container?.createComponent(this.component);

    if (!modalRef) {
      throw new Error('modalRef not found.');
    }

    const component = modalRef.instance as ModalWithData<ModalData, Action>;

    component.closeAction = this.closeAction;
    component.modalData = this.modalData;
  }

  private setBackdrop(): void {
    this.renderer2.setStyle(
      this.hostElement.nativeElement,
      'backgroundColor',
      this.settings?.noBackdrop ? null : 'rgba(0, 0, 0, 0.5)',
    );
  }
}
