import { AuthService } from '../../api/auth/auth.service';
import { DestroyRef, Injectable } from '@angular/core';
import { AUTH_TOKEN_KEY } from './contants/auth-user.constant';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
import {
  RegistrationCredentials,
  RegistrationResponse,
} from '../../api/auth/interfaces/auth.interface';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly authService: AuthService,
    private readonly destroyRef: DestroyRef,
  ) {}

  get isAuth(): boolean {
    return true;
  }

  get token(): string | null {
    return 'sdafasdfasdfadsfasdfasdf';
  }

  registration$(
    credentials: RegistrationCredentials,
  ): Observable<RegistrationResponse> {
    return this.authService.registration$(credentials).pipe(
      tap(({ idToken }) => {
        this.setToken(idToken);
      }),
    );
  }

  login(credentials: any): void {
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

  private setToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  private removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
