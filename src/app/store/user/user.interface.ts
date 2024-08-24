import { LastMessage } from '../../pages/messenger/chat/chat.interface';
import { SettingsState } from '../settings/settings.feature';

export interface EntireUserData {
  id: number;
  userName: string;
  avatar: string | null;
  settings: SettingsState;
}

export interface Version {
  id: number;
  version: string;
  releaseDate: string;
  updates: string[];
}

export interface UserData extends Omit<EntireUserData, 'settings'> {}

export interface Dialog {
  id: number;
  userName: string;
  avatar: string | null;
  isOnline: boolean;
  roomId: string;
  lastMessage: LastMessage;
}
