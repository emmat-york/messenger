import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constructor } from '../../../interfaces/common.interface';
import { Observable } from 'rxjs';
import { ModalConfig } from './interfaces/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly matDialog: MatDialog) {}

  open<ModalData extends object, CloseAction = undefined>(
    component: Constructor,
    modalConfig?: ModalConfig<ModalData>,
  ): Observable<CloseAction> {
    const { modalData, settings, multi } = modalConfig || {};

    if (this.matDialog.openDialogs.length && !multi) {
      this.matDialog.closeAll();
    }

    const ref = this.matDialog.open(component, settings);
    const componentRef = ref.componentRef;

    componentRef?.setInput('modalData', modalData ?? {});
    componentRef?.setInput('closeAction', (action?: CloseAction) =>
      ref.close(action),
    );

    return ref.afterClosed();
  }
}
