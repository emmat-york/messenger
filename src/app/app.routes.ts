import { Routes } from '@angular/router';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { canActivateMessenger } from './guards/messenger.guard';
import { canActivateAuth } from './guards/auth.guard';
import { AppPages } from './shared/enums/app-routes.enum';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppPages.Messenger,
  },
  {
    path: AppPages.Messenger,
    component: MessengerComponent,
    canActivate: [canActivateMessenger],
  },
  {
    path: AppPages.Settings,
    loadComponent: () =>
      import(
        './pages/messenger/components/contacts/components/settings/settings.component'
      ).then(c => c.SettingsComponent),
    canActivate: [canActivateMessenger],
  },
  {
    path: AppPages.Registration,
    loadComponent: () =>
      import('./pages/registration/registration.component').then(
        c => c.RegistrationComponent,
      ),
    canActivate: [canActivateAuth],
  },
  {
    path: AppPages.Login,
    loadComponent: () =>
      import('./pages/login/login.component').then(c => c.LoginComponent),
    canActivate: [canActivateAuth],
  },
  {
    path: AppPages.NotFound,
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        c => c.NotFoundComponent,
      ),
  },
];
