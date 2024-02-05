import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {chatFeature} from "./store/chat/chat.feature";
import {UserEffect} from "./store/user/user.effect";
import {SettingsEffect} from "./store/settings/settings.effect";
import {ChatEffect} from "./store/chat/chat.effect";
import {settingsFeature} from "./store/settings/settings.feature";
import {userFeature} from "./store/user/user.feature";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideState(chatFeature), provideState(userFeature) ,provideState(settingsFeature), provideEffects([UserEffect, SettingsEffect, ChatEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
