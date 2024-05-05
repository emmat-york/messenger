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

function initializeAppFactory(
  authUserService: AuthUserService,
  userService: UserService,
  userFacade: UserFacade,
): () => Observable<UserData | never> {
  return () => {
    if (authUserService.isAuth) {
      return userService
        .getUserData$('')
        .pipe(tap(userData => userFacade.setUserData(userData)));
    }

    return EMPTY;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    UserService,
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
      deps: [AuthUserService, UserService, UserFacade],
      multi: true,
    },
    provideAnimationsAsync(),
  ],
};
