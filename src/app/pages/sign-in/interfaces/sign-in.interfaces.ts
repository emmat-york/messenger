import { SignInKey } from '../enums/sign-in.enums';

export interface SignInErrorState {
  [SignInKey.Login]: Record<any, any>;
  [SignInKey.Password]: {};
}
