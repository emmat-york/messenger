import { inject } from '@angular/core';
import { AuthUserService } from '../shared/services/app/auth-user/auth-user.service';
import { Router } from '@angular/router';
import { AppPages } from '../shared/enums/app-routes.enum';

export function canActivateMessenger(): boolean {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  if (authUserService.isAuth) {
    return true;
  }

  router.navigate([AppPages.Login]).then();
  return false;
}
