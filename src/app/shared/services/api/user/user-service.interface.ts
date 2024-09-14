/**
 * User here equals to init user data (your data)
 * **/
export interface User {
  id: number;
  name: string;
  avatar: string | null;
  // Settings
  theme: string;
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
