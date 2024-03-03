import { environment } from '../../../../../../environment/environment';

export const REGISTRATION_PATH = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;
