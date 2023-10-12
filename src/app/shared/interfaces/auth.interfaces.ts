import { SignInKey } from '../../pages/sign-in/enums/sign-in.enums';

export interface AuthCredentials {
  [SignInKey.Login]: string;
  [SignInKey.Password]: string;
}
