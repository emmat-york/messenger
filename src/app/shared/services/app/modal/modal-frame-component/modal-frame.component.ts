import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Constructor } from '../../../../interfaces/common.interface';
import { Subject } from 'rxjs';
import { ModalFrame } from './interfaces/modal-frame.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class ModalFrameComponent implements ModalFrame, OnInit, OnDestroy {
  @Input() type: 'aside' | 'middle' = 'middle';
  @Input() component!: Constructor;
  @Input() closeAction!: () => void;
  @Input() destroy$!: Subject<void>;

  @ViewChild('container', { static: true, read: ViewContainerRef })
  private readonly container?: ViewContainerRef;

  ngOnInit(): void {
    this.container?.createComponent(this.component);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
