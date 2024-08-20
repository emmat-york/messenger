import { Router, Routes } from '@angular/router';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { inject } from '@angular/core';
import { AuthUserService } from './shared/services/app/auth-user/auth-user.service';

export function canActivateAuth(): boolean {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  if (!authUserService.isAuth) {
    return true;
  }

  router.navigate(['messenger']);
  return false;
}

export function canActivateMessenger(): boolean {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  if (authUserService.isAuth) {
    return true;
  }

  router.navigate(['login']);
  return false;
}

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
        './pages/messenger/components/dialogs/components/user-menu/components/settings/settings.component'
      ).then(c => c.SettingsComponent),
    canActivate: [canActivateMessenger],
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registration/registration.component').then(
        c => c.RegistrationComponent,
      ),
    canActivate: [canActivateAuth],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(c => c.LoginComponent),
    canActivate: [canActivateAuth],
  },
];
