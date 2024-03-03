import { AuthService } from '../../api/auth/auth.service';
import { DestroyRef, Injectable } from '@angular/core';
import {
  AUTH_TOKEN_EXPIRES_DATE_KEY,
  AUTH_TOKEN_KEY,
} from './contants/auth-user.constant';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
import {
  RegistrationCredentials,
  RegistrationResponse,
} from '../../api/auth/interfaces/auth.interface';
import { UserFacade } from '../../../../store/user/user.facade';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly authService: AuthService,
    private readonly userFacade: UserFacade,
    private readonly destroyRef: DestroyRef,
  ) {}

  get isAuth(): boolean {
    return !!this.token;
  }

  get token(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.authService
      .registration$(credentials)
      .pipe(
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
