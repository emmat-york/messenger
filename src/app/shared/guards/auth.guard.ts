import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthFacade } from '../services/facade/auth.facade';
import { inject } from '@angular/core';

export const AuthGuardFn = (): Observable<boolean> => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  return authFacade.isAuth$.pipe(
    map(isAuth => {
      if (isAuth) {
        return true;
      }

      router.navigate(['sign-in']);
      return false;
    }),
  );
};
