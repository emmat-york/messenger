import { Message } from '../../../../pages/messenger/chat/chat.interface';

export interface EssentialUserData {
  uuid: number;
  name: string;
  avatar: string | null;
  isYourContact: boolean;
  isYou: boolean;
}

export interface Dialog extends EssentialUserData {
  roomId: number;
  isOnline: boolean;
  lastMessage: Message | null;
}
