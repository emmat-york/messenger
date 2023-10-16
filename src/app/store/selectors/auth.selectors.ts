import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Keys } from '../enums/store.enums';
import { AuthState } from '../reducers/auth.reducer';

const futureSelector = createFeatureSelector<AuthState>(Keys.Auth);

export const isAuth = createSelector(futureSelector, state => state.isAuth);
export const errorMessage = createSelector(futureSelector, state => state.errorMessage);
