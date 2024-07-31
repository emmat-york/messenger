import { Constructor } from '../../../../../interfaces/common.interface';
import { Subject } from 'rxjs';

export interface ModalFrame {
  component: Constructor;
  closeAction: () => void;
  destroy$: Subject<void>;
}
