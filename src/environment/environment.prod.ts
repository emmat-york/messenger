import { Environment } from './environment.interface';
import { FIREBASE_CONFIG } from './environment.constant';

export const environment: Environment = {
  isProduction: true,
  apiKey: FIREBASE_CONFIG.apiKey,
};
