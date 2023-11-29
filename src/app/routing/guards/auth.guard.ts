import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthFacade } from '../../store/auth/auth.facade';
import { inject } from '@angular/core';
import { AppRoutes } from '../enums/routing.enum';

export const AuthGuardFn = (): Observable<boolean> => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  return authFacade.isAuth$.pipe(
    map(isAuth => {
      if (isAuth) {
        return true;
      }

      router.navigate([AppRoutes.signIn]);
      return false;
    }),
  );
};
