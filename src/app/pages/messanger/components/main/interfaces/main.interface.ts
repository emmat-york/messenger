import { Contact } from '../components/contacts/components/interfaces/contact.interface';

export interface UserData {
  id: number;
  userName: string;
  phone: string;
  avatar: string;
  contacts: Contact[];
  settings: any;
}
