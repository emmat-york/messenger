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

export interface ModalFrame<Action> {
  component: Constructor;
  closeAction: (action?: Action) => void;
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
export class ModalFrameComponent<ModalData extends object, Action>
  implements ModalFrame<Action>, OnInit
{
  @Input() closeAction: (action?: Action) => void;
  @Input() modalData: ModalData;
  @Input() component: Constructor;
  @Input() settings: ModalSettings;

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

    modalRef.setInput('closeAction', this.closeAction);
    modalRef.setInput('modalData', this.modalData);
  }

  private setBackdrop(): void {
    this.renderer2.setStyle(
      this.hostElement.nativeElement,
      'backgroundColor',
      this.settings?.noBackdrop ? null : 'rgba(0, 0, 0, 0.5)',
    );
  }
}
