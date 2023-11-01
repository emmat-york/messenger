import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appStore } from './store/store';
import { AuthEffects } from './store/effects/auth.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationService } from './shared/services/app/notification/notification.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languages } from './shared/enums/languages.enum';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './shared/services/facade/auth.facade';
import { UserFacade } from './shared/services/facade/user.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot([AuthEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
      defaultLanguage: Languages.En,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (
        translate: TranslateService,
        authFacade: AuthFacade,
        userFacade: UserFacade,
      ) => {
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
