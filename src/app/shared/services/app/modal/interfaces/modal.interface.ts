export interface Modal<Action = undefined> {
  closeAction: (action: Action) => void;
}

export interface ModalWithData<ModalData extends object, Action = undefined>
  extends Modal<Action> {
  modalData: ModalData;
}

export interface ModalSettings {
  type?: 'aside' | 'middle';
  noBackdrop?: boolean;
  multi?: boolean;
}
