import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appStore } from './store/store';
import { AuthEffects } from './store/effects/auth.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languages } from './shared/enums/languages.enum';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './shared/services/app/notification/notification.service';

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
      useFactory: (translate: TranslateService) => {
        return () => translate.get('Auth.SignUp');
      },
      multi: true,
      deps: [TranslateService],
    },
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
