import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Constructor } from '../../../../interfaces/common.interface';
import { ModalFrame } from './interfaces/modal-frame.interface';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../directives/click-outside/click-outside.directive';
import { ModalWithData } from '../interfaces/modal.interface';

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  imports: [NgClass, ClickOutsideDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent<ModalData extends object, Action = undefined>
  implements ModalFrame<Action>, OnInit
{
  @Input() type: 'aside' | 'middle' = 'middle';
  @Input() modalData: ModalData;
  @Input() component: Constructor;
  @Input() closeAction: (action: Action) => void;

  @ViewChild('container', { static: true, read: ViewContainerRef })
  private readonly container?: ViewContainerRef;

  ngOnInit(): void {
    this.initModalComponent();
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
}
