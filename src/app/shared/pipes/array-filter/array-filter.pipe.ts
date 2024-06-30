import { Pipe, PipeTransform } from '@angular/core';
import { getTrimmedString } from '../../utils/form/form.util';

@Pipe({
  name: 'arrayFilter',
  standalone: true,
})
export class ArrayFilterPipe implements PipeTransform {
  transform<T extends { [key: string]: any }, D extends keyof T>(
    array: T[] | null | undefined,
    search: string | null,
    propName: D,
  ): T[] {
    if (!array) {
      return [];
    }

    if (!search) {
      return array;
    }

    return array.filter(item =>
      item[propName]
        .toLowerCase()
        .includes(getTrimmedString(search).toLowerCase()),
    );
  }
}
