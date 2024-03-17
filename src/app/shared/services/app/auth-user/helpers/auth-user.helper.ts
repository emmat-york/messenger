import { HttpErrorResponse } from '@angular/common/http';
import {
  LoginErrorMessages,
  LoginErrorResponse,
  RegistrationErrorMessages,
  RegistrationErrorResponse,
} from '../../../api/auth/interfaces/auth.interface';

export const getRegistrationErrorMessage = (
  errorResponse: HttpErrorResponse,
): string => {
  const error = errorResponse.error as RegistrationErrorResponse;

  const REGISTRATION_ERROR_MAP: Record<RegistrationErrorMessages, string> = {
    EMAIL_EXISTS: 'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:
      'We have blocked all requests from this device due to unusual activity. Try again later.',
  };

  return REGISTRATION_ERROR_MAP[error.error.message];
};

export const getLoginErrorMessage = (
  errorResponse: HttpErrorResponse,
): string => {
  const error = errorResponse.error as LoginErrorResponse;

  const LOGIN_ERROR_MAP: Record<LoginErrorMessages, string> = {
    INVALID_LOGIN_CREDENTIALS:
      'You have provided invalid credentials. Please, check it and try once again.',
  };

  return LOGIN_ERROR_MAP[error.error.message];
};
