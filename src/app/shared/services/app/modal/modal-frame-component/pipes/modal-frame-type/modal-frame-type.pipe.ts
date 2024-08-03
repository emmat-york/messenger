import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalFrameType',
  standalone: true,
})
export class ModalFrameTypePipe implements PipeTransform {
  transform(type: 'aside' | 'middle' | undefined): 'aside' | 'middle' {
    if (type === 'middle' || !type) {
      return 'middle';
    }

    return 'aside';
  }
}
