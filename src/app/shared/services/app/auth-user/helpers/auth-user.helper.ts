import { HttpErrorResponse } from '@angular/common/http';
import {
  LoginErrorResponse,
  RegistrationErrorResponse,
} from '../../../api/auth/interfaces/auth.interface';

export const getRegistrationErrorMessage = (
  errorResponse: HttpErrorResponse,
): string => {
  const errorObj = errorResponse.error as RegistrationErrorResponse;

  const REGISTRATION_ERROR_MAP = {
    EMAIL_EXISTS: 'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:
      'We have blocked all requests from this device due to unusual activity. Try again later.',
  };

  return REGISTRATION_ERROR_MAP[errorObj.error.message];
};

export const getLoginErrorMessage = (
  errorResponse: HttpErrorResponse,
): string => {
  const errorObj = errorResponse.error as LoginErrorResponse;

  const LOGIN_ERROR_MAP = {
    EMAIL_NOT_FOUND:
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    INVALID_PASSWORD:
      'The password is invalid or the user does not have a password.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
  };

  return LOGIN_ERROR_MAP['EMAIL_NOT_FOUND'];
};
