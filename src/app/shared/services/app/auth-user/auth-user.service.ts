import { AuthService } from '../../api/auth/auth.service';
import { DestroyRef, Inject, Injectable } from '@angular/core';
import { AUTH_TOKEN_KEY } from './contants/auth-user.constant';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class AuthUserService {
  constructor(
    @Inject(DestroyRef) private readonly destroyRef: DestroyRef,
    private readonly authService: AuthService,
  ) {}

  get isAuth(): boolean {
    return true;
  }

  get token(): string | null {
    return 'sdafasdfasdfadsfasdfasdf';
  }

  login(credentials: any): void {
    this.authService
      .login$(credentials)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }

  registration(credentials: any): void {
    this.authService
      .registration$(credentials)
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
