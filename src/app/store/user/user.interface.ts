export interface UserData {
  id: number;
  userName: string;
  phoneNumber: string;
  avatar: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  userName: string;
  phoneNumber: string;
  avatar: string;
  roomId: {
    [id: string]: string;
  };
}

export interface UserVM {
  userData: UserData | null;
  selectedUserId: number | null;
}
