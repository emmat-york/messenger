import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffect } from './store/user/user.effect';
import { SettingsEffect } from './store/settings/settings.effect';
import { ChatEffect } from './store/chat/chat.effect';
import { provideHttpClient } from '@angular/common/http';
import { AuthUserService } from './shared/services/app/auth-user/auth-user.service';
import { EMPTY, Observable, tap } from 'rxjs';
import { UserService } from './shared/services/api/user/user.service';
import { UserData } from './store/user/user.interface';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { store } from './store/store';
import { UserFacade } from './store/user/user.facade';
import { AuthFacade } from './store/auth/auth.facade';
import { AuthService } from './shared/services/api/auth/auth.service';

function initializeAppFactory(
  authUserService: AuthUserService,
  userService: UserService,
  userFacade: UserFacade,
  authFacade: AuthFacade,
): () => Observable<UserData | never> {
  return () => {
    if (authUserService.isAuth) {
      return userService.getUserData$('').pipe(
        tap(userData => {
          userFacade.setUserData(userData);
          authFacade.setIsAuth(true);
        }),
      );
    }

    return EMPTY;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    UserService,
    AuthService,
    AuthUserService,
    UserFacade,
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore(store),
    provideHttpClient(),
    provideEffects([ChatEffect, UserEffect, SettingsEffect]),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthUserService, UserService, UserFacade, AuthFacade],
      multi: true,
    },
    provideAnimationsAsync(),
  ],
};
