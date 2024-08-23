export interface Environment {
  readonly isProduction: boolean;
  readonly apiKey: string;
}

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCynFf3frEiCcrjDvnonbxYUL9EwSqOR5s',
  authDomain: 'messenger-80e2e.firebaseapp.com',
  projectId: 'messenger-80e2e',
  storageBucket: 'messenger-80e2e.appspot.com',
  messagingSenderId: '441150407676',
  appId: '1:441150407676:web:31538fe15c344532dc2879',
  measurementId: 'G-7WXGBJDJT9',
};

export const environment: Environment = {
  isProduction: false,
  apiKey: FIREBASE_CONFIG.apiKey,
};
