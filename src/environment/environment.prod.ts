import { Environment, FIREBASE_CONFIG } from './environment';

export const environment: Environment = {
  isProduction: true,
  apiKey: FIREBASE_CONFIG.apiKey,
};
