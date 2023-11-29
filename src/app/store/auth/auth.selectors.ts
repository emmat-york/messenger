import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { Keys } from '../store';

const futureSelector = createFeatureSelector<AuthState>(Keys.Auth);

export const isAuth = createSelector(futureSelector, state => state.isAuth);
export const errorMessage = createSelector(futureSelector, state => state.errorMessage);
