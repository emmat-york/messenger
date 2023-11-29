import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appStore } from './store/store';
import { AuthEffects } from './store/auth/auth.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationService } from './shared/services/app/notification/notification.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './store/auth/auth.facade';
import { UserFacade } from './store/user/user.facade';
import { CONTACTS } from './mocks/mocks';
import { ChatEffects } from './store/chat/chat.effects';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot([AuthEffects, ChatEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (
        translate: TranslateService,
        authFacade: AuthFacade,
        userFacade: UserFacade,
      ) => {
        userFacade.setUserState({
          id: 1,
          userName: 'Andrew Filimonchyk',
          phone: '+48 696 761 073',
          avatar: '',
          contacts: CONTACTS,
          settings: {},
        });
          
        return () => translate.get('Auth.SignUp');
      },
      deps: [TranslateService, AuthFacade, UserFacade],
      multi: true,
    },
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
