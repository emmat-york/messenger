import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffect } from './store/user/user.effect';
import { ChatEffect } from './store/chat/chat.effect';
import { provideHttpClient } from '@angular/common/http';
import { AuthUserService } from './shared/services/app/auth-user/auth-user.service';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { UserService } from './shared/services/api/user/user.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserFacade } from './store/user/user.facade';
import { AuthFacade } from './store/auth/auth.facade';
import { AUTH_KEY, reducer as authReducer } from './store/auth/auth.feature';
import { CHAT_KEY, reducer as chatReducer } from './store/chat/chat.feature';
import { reducer as userReducer, USER_KEY } from './store/user/user.feature';
import { ChatSocket } from './shared/services/socket/chat.socket';
import { ChatFacade } from './store/chat/chat.facade';
import {
  reducer as settingsReducer,
  SETTINGS_KEY,
} from './store/settings/settings.feature';
import { SettingsFacade } from './store/settings/settings.facade';
import { User } from './shared/services/api/user/user-service.interface';

function initializeAppFactory(
  authUserService: AuthUserService,
  userService: UserService,
  settingsFacade: SettingsFacade,
  userFacade: UserFacade,
  chatFacade: ChatFacade,
  authFacade: AuthFacade,
  chatSocket: ChatSocket,
): () => Observable<User | never> {
  return (): Observable<User | never> => {
    if (authUserService.isAuth) {
      return userService.getUserData$(authUserService.token).pipe(
        tap(({ id, name, avatar, dialogs, ...settings }) => {
          userFacade.setUser({ essentialData: { id, name }, avatar });
          settingsFacade.setUserSettings(settings);
          chatFacade.setDialogs(dialogs);
          authFacade.setIsAuth(true);
          chatSocket.init();
        }),
        catchError(() => EMPTY),
      );
    }

    return EMPTY;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: AUTH_KEY, reducer: authReducer }),
    provideState({ name: CHAT_KEY, reducer: chatReducer }),
    provideState({ name: USER_KEY, reducer: userReducer }),
    provideState({ name: SETTINGS_KEY, reducer: settingsReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([ChatEffect, UserEffect]),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [
        AuthUserService,
        UserService,
        SettingsFacade,
        UserFacade,
        ChatFacade,
        AuthFacade,
        ChatSocket,
      ],
      multi: true,
    },
  ],
};
