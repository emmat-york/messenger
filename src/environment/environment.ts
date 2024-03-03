import { Environment } from './interfaces/environment.interface';
import { FIREBASE_CONFIG } from './constants/environment.constant';

export const environment: Environment = {
  isProduction: false,
  apiKey: FIREBASE_CONFIG.apiKey,
};
