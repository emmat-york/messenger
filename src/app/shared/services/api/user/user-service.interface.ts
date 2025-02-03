import { Dialog, EssentialUserData } from '../chat/chat-service.interface';
import { Language } from '../../../enums/languages.enum';

/**
 * User here equals to init user data (your data)
 * **/
export interface FullCurrentUserData {
  uuid: number;
  name: string;
  avatar: string | null;
  dialogs: Dialog[];
  contacts: EssentialUserData[];
  isYou: true;
  isYourContact: false;
  // Settings
  isNightMode: boolean;
  versions: Version[];
  isNotificationSoundOn: boolean;
  languages: Language[];
  selectedLanguage: Language;
}

export interface Version {
  id: number;
  version: string;
  releaseDate: string;
  updates: string[];
}
