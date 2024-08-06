import { Routes } from '@angular/router';
import { MessengerComponent } from '../pages/messenger/messenger.component';
import { canActivateMessenger } from './guards/messenger.guard';
import { canActivateAuth } from './guards/auth.guard';
import { AppRoutes } from '../shared/enums/app-routes.enum';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.Messenger,
  },
  {
    path: AppRoutes.Messenger,
    component: MessengerComponent,
    canActivate: [canActivateMessenger],
  },
  {
    path: AppRoutes.Settings,
    loadComponent: () =>
      import(
        '../pages/messenger/components/contacts/components/user-menu/components/settings/settings.component'
      ).then(c => c.SettingsComponent),
    canActivate: [canActivateMessenger],
  },
  {
    path: AppRoutes.Registration,
    loadComponent: () =>
      import('../pages/registration/registration.component').then(
        c => c.RegistrationComponent,
      ),
    canActivate: [canActivateAuth],
  },
  {
    path: AppRoutes.Login,
    loadComponent: () =>
      import('../pages/login/login.component').then(c => c.LoginComponent),
    canActivate: [canActivateAuth],
  },
  {
    path: AppRoutes.NotFound,
    loadComponent: () =>
      import('../pages/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
];
