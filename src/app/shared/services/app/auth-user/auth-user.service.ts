import { AuthService } from '../../api/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  AUTH_TOKEN_EXPIRES_DATE_KEY,
  AUTH_TOKEN_KEY,
} from './contants/auth-user.constant';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  LoginCredentials,
  LoginResponse,
  RegistrationCredentials,
  RegistrationResponse,
} from '../../api/auth/interfaces/auth.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';
import { Router } from '@angular/router';
import { AppPages } from '../../../../app.routes';
import {
  getLoginErrorMessage,
  getRegistrationErrorMessage,
} from './helpers/auth-user.helper';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  get isAuth(): boolean {
    return !!this.token;
  }

  private get token(): string | null {
    const expiresDate = localStorage.getItem(AUTH_TOKEN_EXPIRES_DATE_KEY);
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (!token || !expiresDate) {
      this.removeToken();
      return null;
    }

    const currentDate = new Date().getTime();
    const expiresDateInMilliseconds = Number(expiresDate) * 1000 + currentDate;

    if (currentDate > expiresDateInMilliseconds) {
      this.removeToken();
      return null;
    }

    return token;
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.authService.registration$(credentials).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const message = getRegistrationErrorMessage(errorResponse);
        this.notificationService.showError(message);

        return throwError(() => message);
      }),
      tap(({ idToken, expiresIn }) => {
        this.notificationService.showSuccess(
          'You have been successfully log in!',
        );
        this.setToken({ idToken, expiresIn });
      }),
    );
  }

  login$(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.authService.login$(credentials).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const message = getLoginErrorMessage(errorResponse);
        this.notificationService.showError(message);

        return throwError(() => message);
      }),
      tap(({ idToken, expiresIn }) => {
        this.notificationService.showSuccess(
          'You have been successfully log in!',
        );
        this.setToken({ idToken, expiresIn });
      }),
    );
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate([AppPages.Login]);
  }

  private setToken({
    expiresIn,
    idToken,
  }: {
    expiresIn: string;
    idToken: string;
  }) {
    localStorage.setItem(AUTH_TOKEN_EXPIRES_DATE_KEY, expiresIn);
    localStorage.setItem(AUTH_TOKEN_KEY, idToken);
  }

  private removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN_EXPIRES_DATE_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
