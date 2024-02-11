import { Pipe, PipeTransform } from '@angular/core';
import { getTrimmedString } from '../../helpers/input.helper';

@Pipe({
  name: 'arrayFilter',
  standalone: true,
})
export class ArrayFilterPipe implements PipeTransform {
  transform<T extends { [key: string]: any }, D extends keyof T>(
    array: T[],
    search: string | null,
    propName: D,
  ): T[] {
    if (!search) {
      return array;
    }

    const lowSearch = getTrimmedString(search).toLowerCase();

    return array.filter(item =>
      item[propName].toLowerCase().includes(lowSearch),
    );
  }
}
