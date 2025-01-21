import { Message } from '../../../pages/messenger/chat/chat.interface';
import { Dialog } from '../api/chat/chat-service.interface';

export const messageTypeGuard = (
  messageOrDialog: Message | Dialog,
): messageOrDialog is Message => {
  return (
    (messageOrDialog as Message).message !== undefined && 'message' in messageOrDialog
  );
};
