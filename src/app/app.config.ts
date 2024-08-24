import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffect } from './store/user/user.effect';
import { SettingsEffect } from './store/settings/settings.effect';
import { ChatEffect } from './store/chat/chat.effect';
import { provideHttpClient } from '@angular/common/http';
import { AuthUserService } from './shared/services/app/auth-user/auth-user.service';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { UserService } from './shared/services/api/user/user.service';
import { Dialog } from './store/user/user.interface';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserFacade } from './store/user/user.facade';
import { AuthFacade } from './store/auth/auth.facade';
import { AUTH_KEY, reducer as authReducer } from './store/auth/auth.feature';
import { CHAT_KEY, reducer as chatReducer } from './store/chat/chat.feature';
import {
  reducer as settingsReducer,
  SETTINGS_KEY,
} from './store/settings/settings.feature';
import { reducer as userReducer, USER_KEY } from './store/user/user.feature';
import { ChatSocket } from './shared/services/socket/chat.socket';
import { ChatFacade } from './store/chat/chat.facade';
import { ChatService } from './shared/services/api/chat/chat.service';
import { SettingsFacade } from './store/settings/settings.facade';

function initializeAppFactory(
  authUserService: AuthUserService,
  userService: UserService,
  chatService: ChatService,
  userFacade: UserFacade,
  chatFacade: ChatFacade,
  authFacade: AuthFacade,
  settingsFacade: SettingsFacade,
  chatSocket: ChatSocket,
): () => Observable<Dialog[] | null> {
  return (): Observable<Dialog[] | null> => {
    if (authUserService.isAuth) {
      return userService.getUserData$(authUserService.token).pipe(
        switchMap(({ settings, ...restUserData }) => {
          userFacade.setUserData(restUserData);
          settingsFacade.setSettings(settings);
          return chatService.getUserDialogs$(restUserData.id);
        }),
        tap(dialogs => {
          chatFacade.setDialogs(dialogs);
          authFacade.setIsAuth(true);
          chatSocket.init();
        }),
        catchError(() => {
          authUserService.logOut();
          return of(null);
        }),
      );
    }

    return of(null);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: AUTH_KEY, reducer: authReducer }),
    provideState({ name: CHAT_KEY, reducer: chatReducer }),
    provideState({ name: SETTINGS_KEY, reducer: settingsReducer }),
    provideState({ name: USER_KEY, reducer: userReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([ChatEffect, UserEffect, SettingsEffect]),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [
        AuthUserService,
        UserService,
        ChatService,
        UserFacade,
        ChatFacade,
        AuthFacade,
        SettingsFacade,
        ChatSocket,
      ],
      multi: true,
    },
  ],
};
