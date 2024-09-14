import { EmojiCategory } from './chat.enum';

export interface Message {
  id: number;
  uuid: number;
  message: string;
  userName: string;
  creationDate: string;
  editDate: string | null;
  likes: Like[];
}

export interface Like {
  type: string;
  count: number;
  emoji: Emoji;
}

export interface Emoji {
  no: number;
  title: string;
  category: EmojiCategory;
  pic: string;
}
