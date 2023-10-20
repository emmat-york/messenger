export interface Notification {
  type: NotificationType;
  message: string;
  closeAction: () => void;
}

export type NotificationType = 'success' | 'warning' | 'error';

export interface ModalConfig {
  message: string;
  type: NotificationType;
}
