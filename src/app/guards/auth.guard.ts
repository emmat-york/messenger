import { inject } from '@angular/core';
import { AuthUserService } from '../shared/services/app/auth-user/auth-user.service';
import { Router } from '@angular/router';
import { AppPages } from '../app.routes';

export function canActivateAuth(): boolean {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  if (!authUserService.isAuth) {
    return true;
  }

  router.navigate([AppPages.Messenger]).then();
  return false;
}
