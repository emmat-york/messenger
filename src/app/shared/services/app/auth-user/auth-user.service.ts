import { AuthService } from '../../api/auth/auth.service';
import { DestroyRef, Injectable } from '@angular/core';
import {
  AUTH_TOKEN_EXPIRES_DATE_KEY,
  AUTH_TOKEN_KEY,
} from './contants/auth-user.constant';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  RegistrationCredentials,
  RegistrationErrorResponse,
  RegistrationResponse,
} from '../../api/auth/interfaces/auth.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService,
    private readonly destroyRef: DestroyRef,
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
        const error = errorResponse.error as RegistrationErrorResponse;
        this.notificationService.showError(error.error.message);

        return throwError(() => error);
      }),
      tap(({ idToken, expiresIn }) => this.setToken({ idToken, expiresIn })),
    );
  }

  login$(credentials: any): void {
    this.authService
      .login$(credentials)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }

  logOut(): void {
    this.authService
      .logOut$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.removeToken());
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
