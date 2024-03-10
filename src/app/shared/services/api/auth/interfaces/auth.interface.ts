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

export interface RegistrationErrorResponse {
  error: {
    code: number;
    errors: [
      {
        message: RegistrationErrorMessages;
        domain: string;
        reason: string;
      },
    ];
    message: RegistrationErrorMessages;
  };
}

export type RegistrationErrorMessages =
  | 'EMAIL_EXISTS'
  | 'OPERATION_NOT_ALLOWED'
  | 'TOO_MANY_ATTEMPTS_TRY_LATER';

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

export interface LoginErrorResponse {}

export type LoginErrorMessages =
  | 'EMAIL_NOT_FOUND'
  | 'INVALID_PASSWORD'
  | 'USER_DISABLED';
