import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appStore } from "./store/store";
import { AuthEffects } from "./store/effects/auth.effects";
import { HttpClientModule } from "@angular/common/http";
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot([AuthEffects]),
    LetDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
