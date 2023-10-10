import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appStore } from './store/store';
import { AuthEffects } from './store/effects/auth.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LetDirective } from '@ngrx/component';
import { AuthModule } from './pages/auth/module/auth.module';
import { MessengerModule } from './pages/messanger/module/messenger.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languages } from './shared/enums/languages.enums';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot([AuthEffects]),
    LetDirective,
    AuthModule,
    MessengerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: Languages.En,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
