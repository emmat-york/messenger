import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../components/interfaces/contact.interface';

@Pipe({
  name: 'appContactsFilter',
  standalone: true,
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: Contact[], filterValue: string | null): Contact[] {
    if (!filterValue) {
      return contacts;
    }

    const lowerCasedFilterValue = filterValue.toLowerCase();

    return contacts.filter(({ userName }) => {
      return userName.toLowerCase().includes(lowerCasedFilterValue);
    });
  }
}
