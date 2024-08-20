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
import { ModalFrame } from './modal-frame.interface';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';
import { ModalSettings, ModalWithData } from '../modal.interface';
import { ModalFrameTypePipe } from './modal-frame-type.pipe';

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  imports: [NgClass, ClickOutsideDirective, ModalFrameTypePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent<ModalData extends object, Action = undefined>
  implements ModalFrame<Action>, OnInit
{
  closeAction: (action: Action) => void;
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
    this.closeAction(undefined as Action);
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
