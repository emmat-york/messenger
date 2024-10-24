import {
  Dialog,
  EssentialUserData,
} from '../../shared/services/api/chat/chat-service.interface';

export const dialogTypeGuard = (
  dialogOrEssentialUserData: Dialog | EssentialUserData,
): dialogOrEssentialUserData is Dialog => {
  return (
    (dialogOrEssentialUserData as Dialog).roomId !== undefined &&
    'roomId' in dialogOrEssentialUserData
  );
};
