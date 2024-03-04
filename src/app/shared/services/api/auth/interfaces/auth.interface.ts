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
    errors: {
      message: RegistrationErrorMessages;
      domain: string;
      reason: string;
    }[];
    message: RegistrationErrorMessages;
  };
  EMAIL_EXISTS: string;
  OPERATION_NOT_ALLOWED: string;
  TOO_MANY_ATTEMPTS_TRY_LATER: string;
}

type RegistrationErrorMessages =
  | 'EMAIL_EXISTS' // The email address is already in use by another account.
  | 'OPERATION_NOT_ALLOWED' // Password sign-in is disabled for this project.
  | 'TOO_MANY_ATTEMPTS_TRY_LATER'; // We have blocked all requests from this device due to unusual activity. Try again later.
