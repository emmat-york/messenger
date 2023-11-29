import { SignInKey } from '../../pages/sign-in/enums/sign-in.enum';

export interface AuthCredentials {
  [SignInKey.Login]: string;
  [SignInKey.Password]: string;
}
