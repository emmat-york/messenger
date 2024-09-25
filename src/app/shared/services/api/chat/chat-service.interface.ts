import { Message } from '../../../../pages/messenger/chat/chat.interface';

export interface EssentialUserData {
  id: number;
  name: string;
  avatar: string | null;
}

export interface Dialog extends EssentialUserData {
  roomId: number;
  isOnline: boolean;
  lastMessage: Message | null;
}
