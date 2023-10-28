import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appContactsFilter',
  standalone: true,
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: any[], filterValue: string | null): any[] {
    if (!filterValue) {
      return contacts;
    }

    const lowerCasedFilterValue = filterValue.toLowerCase();

    return contacts;
  }
}
