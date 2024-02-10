import {
  Action,
  addContactActionCreator,
  addMessageActionCreator,
  changeNameActionCreator,
  Contact,
  deleteContactActionCreator,
  Message,
  ngRxInitialActionCreator,
  setInputTextActionCreator,
} from './actions.cheme';

// --- USER STATE ---
interface UserState {
  id: number | null;
  name: string | null;
  contacts: Contact[];
}

const initialUserState: UserState = {
  id: null,
  name: null,
  contacts: [],
};

const userReducer = (
  state: UserState = initialUserState,
  { type, payload }: Action,
): UserState => {
  switch (type) {
    case '[USER] setUserNameAction':
      return {
        ...state,
        name: payload.name,
      };
    case '[USER] addContactAction':
      return {
        ...state,
        contacts: [...state.contacts, payload.contact],
      };
    case '[USER] deleteContactAction':
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload.contactId),
      };
    default:
      return state;
  }
};

// --- CHAT STATE ---
interface ChatState {
  inputText: string;
  messages: Message[];
}

const initialChatState: ChatState = {
  inputText: '',
  messages: [],
};

const chatReducer = (
  state: ChatState = initialChatState,
  { type, payload }: Action,
): ChatState => {
  switch (type) {
    case '[CHAT] setInputTextAction':
      return {
        ...state,
        inputText: payload.inputText,
      };
    case '[CHAT] addMessageAction':
      return {
        ...state,
        messages: [...state.messages, payload.message],
      };
    default:
      return state;
  }
};

// --- STORE ---
class Store {
  user: UserState | undefined;
  chat: ChatState | undefined;

  dispatch(action: Action): void {
    this.user = userReducer(this.user, action);
    this.chat = chatReducer(this.chat, action);
  }

  select(
    fn: (state: Store) => UserState | ChatState | undefined,
  ): UserState | ChatState | undefined {
    return fn(this);
  }
}

// ---------------------------- EXAMPLES -------------------------------
// --- INIT STORE ---
export const store = new Store(); // First step by NGRX: Create NGRX store object
store.dispatch(ngRxInitialActionCreator()); // Second step by NGRX: dispatch first initial action to create init states

// --- USE USER ACTIONS ---
store.dispatch(changeNameActionCreator('Andrew nigga!'));
store.dispatch(addContactActionCreator({ id: 1, name: 'Leha nigga!' }));
store.dispatch(deleteContactActionCreator(10));

// --- USE CHAT ACTIONS ---
store.dispatch(setInputTextActionCreator('new input text'));
store.dispatch(
  addMessageActionCreator({ messageId: 100, text: 'Hello Leha!' }),
);

// --- STORE SELECTOR ---
const selectedUserState = store.select(state => state.user);
