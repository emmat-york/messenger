export enum StoreKey {
  Chat = 'chat',
}

interface AppStore {
  [StoreKey.Chat]: any;
}

export const appStore: AppStore = {
  [StoreKey.Chat]: {}
};
