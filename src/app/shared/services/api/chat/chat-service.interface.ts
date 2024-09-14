import {Message} from '../../../../pages/messenger/chat/chat.interface';

/**
 * Dialog here equals to Contact
 * **/
export interface Dialog {
  id: number;
  name: string;
  avatar: string | null;
  isOnline: boolean;
  roomId: string | null;
  lastMessage: Message | null;
}
