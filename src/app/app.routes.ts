import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { canActivateMessenger } from './guards/messenger.guard';
import { canActivateAuth } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messenger',
  },
  {
    path: 'messenger',
    component: MessengerComponent,
    canActivate: [canActivateMessenger],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [canActivateMessenger],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [canActivateAuth],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateAuth],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
