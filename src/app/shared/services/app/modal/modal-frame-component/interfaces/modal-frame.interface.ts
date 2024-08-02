import { Constructor } from '../../../../../interfaces/common.interface';

export interface ModalFrame<Action = undefined> {
  component: Constructor;
  type: 'aside' | 'middle';
  closeAction: (action: Action) => void;
}
