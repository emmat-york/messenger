import { LastMessage } from '../../pages/messenger/chat/chat.interface';

export interface UserData {
  id: number;
  userName: string;
  phoneNumber: string;
  avatar: string;
}

export interface Dialog {
  id: number;
  userName: string;
  avatar: string;
  isOnline: boolean;
  roomId: string;
  lastMessage: LastMessage;
}
