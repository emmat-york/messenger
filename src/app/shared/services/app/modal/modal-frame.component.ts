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

const MODAL_BACKDROP_COLOR = 'rgba(0, 0, 0, 0.5)';

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
  imports: [NgClass, ModalFrameTypePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent<ModalData extends object, Action>
  implements ModalFrame<ModalData, Action>, OnInit
{
  @Input() closeAction: (action?: Action) => void;
  @Input() component: Constructor;
  @Input() settings?: ModalSettings;
  @Input() modalData?: ModalData;

  @ViewChild('modalContainer')
  private readonly modalContainer: ElementRef<HTMLDivElement>;
  @ViewChild('container', { static: true, read: ViewContainerRef })
  private readonly container: ViewContainerRef;

  constructor(
    private readonly hostElementRef: ElementRef<HTMLElement>,
    private readonly renderer2: Renderer2,
  ) {}

  @HostListener('document:keydown.escape') escapeKeyListener(): void {
    this.closeAction();
  }

  ngOnInit(): void {
    this.initComponent();
    this.setBackdrop();
  }

  clickHandler(event: Event): void {
    if (this.isClickInsideModalComponent(event.target as HTMLElement)) {
      return;
    }

    event.stopImmediatePropagation();
    event.preventDefault();

    this.closeAction();
  }

  private isClickInsideModalComponent(clickedElement: HTMLElement): boolean {
    return (
      clickedElement === this.modalContainer.nativeElement ||
      this.modalContainer.nativeElement.contains(clickedElement)
    );
  }

  private initComponent(): void {
    const modalRef = this.container.createComponent(this.component, {
      injector: this.settings?.injector,
    });

    modalRef.setInput('closeAction', this.closeAction);

    if (this.modalData) {
      modalRef.setInput('modalData', this.modalData);
    }
  }

  private setBackdrop(): void {
    this.renderer2.setStyle(
      this.hostElementRef.nativeElement,
      'backgroundColor',
      this.settings?.noBackdrop ? null : MODAL_BACKDROP_COLOR,
    );
  }
}
