export interface Contact {
  id: number;
  userName: string;
  avatar: string;
  messages: Message[];
}

export interface Message {
  id: number;
  message: string;
  date: string;
}
