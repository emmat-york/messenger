import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Constructor } from '../../../interfaces/common.interface';
import { NgClass } from '@angular/common';
import { ModalSettings } from './modal.interface';
import { ModalFrameTypePipe } from './modal-frame-type.pipe';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

interface ModalFrame<ModalData, Action> {
  component: Constructor;
  closeAction: (action?: Action) => void;
  modalData?: ModalData;
  settings?: ModalSettings;
}

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  imports: [NgClass, ModalFrameTypePipe, ClickOutsideDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent<ModalData extends object, Action>
  implements ModalFrame<ModalData, Action>, OnInit
{
  @Input() closeAction: (action?: Action) => void;
  @Input() component: Constructor;
  @Input() settings?: ModalSettings;
  @Input() modalData?: ModalData;

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

    if (this.modalData) {
      modalRef.setInput('modalData', this.modalData);
    }

    modalRef.setInput('closeAction', this.closeAction);
  }

  private setBackdrop(): void {
    this.renderer2.setStyle(
      this.hostElement.nativeElement,
      'backgroundColor',
      this.settings?.noBackdrop ? null : 'rgba(0, 0, 0, 0.5)',
    );
  }
}
