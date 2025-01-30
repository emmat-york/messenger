import { Pipe, PipeTransform } from '@angular/core';
import { ContactType } from './add-contact.interface';

@Pipe({
  name: 'contactIdentification',
  standalone: true,
})
export class ContactIdentificationPipe implements PipeTransform {
  transform(isYou: boolean, isYourContact: boolean): ContactType {
    if (isYou) {
      return 'you';
    } else if (isYourContact) {
      return 'your-contact';
    } else {
      return 'not-your-contact';
    }
  }
}
