import { Injector } from '@angular/core';

export interface Modal<Action = unknown> {
  closeAction: (action?: Action) => void;
}

export interface ModalWithData<ModalData extends object, Action = unknown>
  extends Modal<Action> {
  modalData: ModalData;
}

export interface ModalSettings {
  type?: 'aside' | 'middle';
  noBackdrop?: boolean;
  injector?: Injector;
  multi?: boolean;
}
