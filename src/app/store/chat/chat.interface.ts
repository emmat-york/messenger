export interface Message {
  userName: string;
  messageText: string;
  createDate: Date;
  editDate: Date;
  likeData: Like[];
}

export interface Like {
  type: string;
  count: number;
  emoji: string;
}
