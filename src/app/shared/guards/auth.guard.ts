import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthFacade } from '../services/facades/auth.facade';

export const AuthGuardFn = (
  authFacade: AuthFacade,
  router: Router,
): Observable<boolean> => {
  return authFacade.isAuth$.pipe(
    map(isAuth => {
      if (isAuth) {
        return true;
      } else {
        router.navigate(['sign-in']);
        return false;
      }
    }),
  );
};
