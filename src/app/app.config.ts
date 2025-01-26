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
import { ASIDE_KEY, reducer as asideReducer } from './store/aside/aside.feature';
import {
  reducer as settingsReducer,
  SETTINGS_KEY,
} from './store/settings/settings.feature';
import { SettingsFacade } from './store/settings/settings.facade';
import { FullCurrentUserData } from './shared/services/api/user/user-service.interface';
import { SettingsEffect } from './store/settings/settings.effect';
import { AuthEffects } from './store/auth/auth.effect';

function initializeAppFactory(
  authUserService: AuthUserService,
  userService: UserService,
  settingsFacade: SettingsFacade,
  userFacade: UserFacade,
  authFacade: AuthFacade,
): () => Observable<FullCurrentUserData | never> {
  return (): Observable<FullCurrentUserData | never> => {
    if (authUserService.isAuth) {
      return userService.getUserData$(authUserService.token).pipe(
        tap(({ uuid, name, avatar, dialogs, contacts, ...settings }) => {
          userFacade.setUser({
            essentialData: { uuid, name, avatar },
            dialogs,
            contacts,
          });
          settingsFacade.setUserSettings(settings);
          authFacade.setIsAuth(true);
        }),
        catchError(() => {
          console.error('Error while initializing user data!');
          return EMPTY;
        }),
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
    provideState({ name: ASIDE_KEY, reducer: asideReducer }),
    provideState({ name: SETTINGS_KEY, reducer: settingsReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([ChatEffect, UserEffect, SettingsEffect, AuthEffects]),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthUserService, UserService, SettingsFacade, UserFacade, AuthFacade],
      multi: true,
    },
  ],
};
