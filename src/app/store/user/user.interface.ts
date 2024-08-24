import { LastMessage } from '../../pages/messenger/chat/chat.interface';
import { SettingsState } from '../settings/settings.feature';

export interface FullUserData {
  id: number;
  userName: string;
  avatar: string | null;
  settings: SettingsState;
}

export interface UserData extends Omit<FullUserData, 'settings'> {}

export interface Dialog {
  id: number;
  userName: string;
  avatar: string | null;
  isOnline: boolean;
  roomId: string;
  lastMessage: LastMessage;
}
