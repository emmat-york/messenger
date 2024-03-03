export interface RegistrationCredentials {
  email: string;
  password: string;
}

export interface RegistrationRequestBody {
  email: string; // The email for the user to create
  password: string; // The password for the user to create
  returnSecureToken: true; // Whether to return an ID and refresh token. Should always be true.
}

export interface RegistrationResponse {
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; //	The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //	The number of seconds in which the ID token expires.
  localId: string; // The uid of the newly created user.
}

export interface RegistrationErrorResponse {
  EMAIL_EXISTS: string; // The email address is already in use by another account.
  OPERATION_NOT_ALLOWED: string; // Password sign-in is disabled for this project.
  TOO_MANY_ATTEMPTS_TRY_LATER: string; // We have blocked all requests from this device due to unusual activity. Try again later.
}
