import { ResponseCode } from '../../../../enums/response-code.enum';

// COMMON
interface AuthErrorResponse<T> {
  error: {
    code: ResponseCode;
    errors: [
      {
        domain: string;
        message: T;
        reason: string;
      },
    ];
    message: T;
  };
}

// REGISTRATION
export interface RegistrationCredentials {
  email: string;
  password: string;
}

export interface RegistrationResponse {
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; //	The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //	The number of seconds in which the ID token expires.
  localId: string; // The uid of the newly created user.
}

export type RegistrationErrorMessages =
  | 'EMAIL_EXISTS'
  | 'OPERATION_NOT_ALLOWED'
  | 'TOO_MANY_ATTEMPTS_TRY_LATER';

export type RegistrationErrorResponse =
  AuthErrorResponse<RegistrationErrorMessages>;

// LOGIN
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  idToken: string; // A Firebase Auth ID token for the authenticated user.
  email: string; //	The email for the authenticated user.
  refreshToken: string; //	A Firebase Auth refresh token for the authenticated user.
  expiresIn: string; // The number of seconds in which the ID token expires.
  localId: string; // The uid of the authenticated user.
  registered: boolean; // Whether the email is for an existing account.
}

export type LoginErrorMessages = 'INVALID_LOGIN_CREDENTIALS';

export type LoginErrorResponse = AuthErrorResponse<LoginErrorMessages>;
