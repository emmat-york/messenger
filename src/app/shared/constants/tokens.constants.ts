import { InjectionToken } from '@angular/core';
import { AuthFacade } from '../services/facades/auth.facade';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export const AuthGuardToken = new InjectionToken<
  (authFacade: AuthFacade, router: Router) => Observable<boolean>
>('auth.guard.injection.token');
