import { Pipe, PipeTransform } from '@angular/core';
import { Dialog, EssentialUserData } from '../services/api/chat/chat-service.interface';

@Pipe({
  name: 'dialogTypeGuard',
  standalone: true,
})
export class DialogTypeGuardPipe implements PipeTransform {
  transform(
    dialogOrEssentialUserData: Dialog | EssentialUserData,
  ): dialogOrEssentialUserData is Dialog {
    return (
      (dialogOrEssentialUserData as Dialog).roomId !== undefined &&
      'roomId' in dialogOrEssentialUserData
    );
  }
}
