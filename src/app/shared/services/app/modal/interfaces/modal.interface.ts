import { MatDialogConfig } from '@angular/material/dialog';

export interface ModalConfig<ModalData> {
  modalData?: ModalData;
  settings?: MatDialogConfig<ModalData>;
  multi?: boolean;
}

export interface Modal<CloseAction = undefined> {
  closeAction: (action?: CloseAction) => void;
}

export interface ModalWithData<ModalData, CloseAction = undefined> {
  modalData: ModalData;
  closeAction: (action?: CloseAction) => void;
}
