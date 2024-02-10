export interface Action {
  type: string;
  payload?: any;
}

export interface Contact {
  id: number;
  name: string;
}

export interface Message {
  messageId: number;
  text: string;
}

// --- NGRX INITIAL ACTION CREATOR ---
export const ngRxInitialActionCreator = (): Action => {
  return {
    type: '[NGRX] ngRxInitialAction',
  };
};

// --- USER ACTION CREATORS ---
export const changeNameActionCreator = (name: string): Action => {
  return {
    type: '[USER] changeNameAction',
    payload: { name },
  };
};

export const addContactActionCreator = (contact: Contact): Action => {
  return {
    type: '[USER] addContactAction',
    payload: { contact },
  };
};

export const deleteContactActionCreator = (contactId: number): Action => {
  return {
    type: '[USER] deleteContactAction',
    payload: { contactId },
  };
};

// --- CHAT ACTION CREATORS ---
export const setInputTextActionCreator = (inputText: string): Action => {
  return {
    type: '[CHAT] setInputTextAction',
    payload: { inputText },
  };
};

export const addMessageActionCreator = (message: Message): Action => {
  return {
    type: '[CHAT] addMessageAction',
    payload: { message },
  };
};
