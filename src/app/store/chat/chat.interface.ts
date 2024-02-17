export interface Message {
  userId: number;
  message: string;
  userName: string;
  roomId: string;
  creationDate: Date;
  editDate: Date | null;
  likes: Like[];
}

export interface Like {
  type: string;
  count: number;
  emoji: string;
}
