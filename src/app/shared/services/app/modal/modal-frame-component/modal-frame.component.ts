import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { Constructor } from '../../../../interfaces/common.interface';
import { Subject } from 'rxjs';
import { ModalFrame } from './interfaces/modal-frame.interface';

@Component({
  selector: 'app-modal-frame',
  standalone: true,
  templateUrl: 'modal-frame.component.html',
  styleUrl: 'modal-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFrameComponent implements ModalFrame, OnDestroy {
  @Input() component!: Constructor;
  @Input() closeAction!: () => void;
  @Input() destroy$!: Subject<void>;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
