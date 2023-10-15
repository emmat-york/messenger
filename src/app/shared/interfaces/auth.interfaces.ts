import { SignInKeys } from '../../pages/sign-in/enums/sign-in.enums';

export interface AuthCredentials {
  [SignInKeys.Login]: string;
  [SignInKeys.Password]: string;
}
