import {Routes} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {MessengerComponent} from "./pages/messenger/messenger.component";
import {SettingsComponent} from "./pages/settings/settings.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messenger',
  },
  {
    path: 'messenger',
    component: MessengerComponent,
  },
  {
    path: 'setting',
    component: SettingsComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
