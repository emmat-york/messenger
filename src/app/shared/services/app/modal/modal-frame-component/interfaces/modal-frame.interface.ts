import { Constructor } from '../../../../../interfaces/common.interface';
import { ModalSettings } from '../../interfaces/modal.interface';

export interface ModalFrame<Action = undefined> {
  component: Constructor;
  closeAction: (action: Action) => void;
  settings: ModalSettings;
}
