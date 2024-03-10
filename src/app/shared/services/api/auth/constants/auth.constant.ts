import { environment } from '../../../../../../environment/environment';

export const REGISTRATION_PATH = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;
export const LOGIN_PATH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
