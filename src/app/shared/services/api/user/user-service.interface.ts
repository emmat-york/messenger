import { Dialog, EssentialUserData } from '../chat/chat-service.interface';

/**
 * User here equals to init user data (your data)
 * **/
export interface FullCurrentUserData {
  id: number;
  name: string;
  avatar: string | null;
  dialogs: Dialog[];
  contacts: EssentialUserData[];
  // Settings
  isNightMode: boolean;
  versions: Version[];
  isNotificationSoundOn: boolean;
  languages: string[];
  selectedLanguage: string;
}

export interface Version {
  id: number;
  version: string;
  releaseDate: string;
  updates: string[];
}
