import { Pipe, PipeTransform } from '@angular/core';
import { getTrimmedString } from '../../../../../shared/helpers/input.helper';

@Pipe({
  name: 'contactFilter',
  standalone: true,
})
export class ContactsFilterPipe implements PipeTransform {
  transform(
    contacts: { name: string }[],
    search: string | null,
  ): { name: string }[] {
    if (!search) {
      return contacts;
    }

    const lowSearch = getTrimmedString(search).toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowSearch),
    );
  }
}
