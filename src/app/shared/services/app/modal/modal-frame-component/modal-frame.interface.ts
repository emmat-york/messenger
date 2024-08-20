import { Constructor } from '../../../../interfaces/common.interface';
import { ModalSettings } from '../modal.interface';

export interface ModalFrame<Action = undefined> {
  component: Constructor;
  closeAction: (action: Action) => void;
  settings: ModalSettings;
}
