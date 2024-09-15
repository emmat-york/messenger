import { AuthService } from '../../api/auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { LoginCredentials, RegistrationCredentials } from '../../api/auth/auth.interface';
import { Router } from '@angular/router';
import { UserFacade } from '../../../../store/user/user.facade';
import { UserService } from '../../api/user/user.service';
import { AuthFacade } from '../../../../store/auth/auth.facade';
import { ChatService } from '../../api/chat/chat.service';
import { ChatFacade } from '../../../../store/chat/chat.facade';
import { User } from '../../api/user/user-service.interface';

export const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
export const AUTH_TOKEN_EXPIRES_DATE_KEY = 'AUTH_TOKEN_EXPIRES_IN_KEY';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(
    private readonly chatService: ChatService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly userFacade: UserFacade,
    private readonly chatFacade: ChatFacade,
    private readonly authFacade: AuthFacade,
    private readonly router: Router,
  ) {}

  get isAuth(): boolean {
    return !!this.token;
  }

  get token(): string | null {
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

  registration$(credentials: RegistrationCredentials): Observable<User> {
    return this.authService.registration$(credentials).pipe(
      switchMap(({ idToken, expiresIn }) => {
        this.setToken({ idToken, expiresIn });

        return this.userService.getUserData$(idToken).pipe(
          tap(({ id, name, avatar, dialogs }) => {
            this.userFacade.setUser({
              essentialData: { id, name },
              avatar,
            });

            this.chatFacade.setDialogs(dialogs);
          }),
        );
      }),
    );
  }

  login$(credentials: LoginCredentials): Observable<User> {
    return this.authService.login$(credentials).pipe(
      switchMap(({ idToken, expiresIn }) => {
        this.setToken({ idToken, expiresIn });

        return this.userService.getUserData$(idToken).pipe(
          tap(({ id, name, avatar, dialogs }) => {
            this.userFacade.setUser({
              essentialData: { id, name },
              avatar,
            });

            this.chatFacade.setDialogs(dialogs);
          }),
        );
      }),
    );
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate(['login']);
  }

  private setToken({ expiresIn, idToken }: { expiresIn: string; idToken: string }) {
    localStorage.setItem(AUTH_TOKEN_EXPIRES_DATE_KEY, expiresIn);
    localStorage.setItem(AUTH_TOKEN_KEY, idToken);
    this.authFacade.setIsAuth(true);
  }

  private removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN_EXPIRES_DATE_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    this.authFacade.setIsAuth(false);
  }
}
