import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {chatFeature} from "./store/chat/chat.feature";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideState(chatFeature) , provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
