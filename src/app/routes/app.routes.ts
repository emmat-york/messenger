import { Routes } from '@angular/router';
import { MessengerComponent } from '../pages/messenger/messenger.component';
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
    loadComponent: () =>
      import(
        '../pages/messenger/components/dialogs/components/user-menu/components/settings/settings.component'
      ).then(c => c.SettingsComponent),
    canActivate: [canActivateMessenger],
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('../pages/registration/registration.component').then(
        c => c.RegistrationComponent,
      ),
    canActivate: [canActivateAuth],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login.component').then(c => c.LoginComponent),
    canActivate: [canActivateAuth],
  },
];
