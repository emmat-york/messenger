import { Contact } from '../components/contacts/components/interfaces/contact.interfaces';

export interface UserData {
  id: number;
  userName: string;
  phone: string;
  avatar: string;
  contacts: Contact[];
  settings: any;
}
