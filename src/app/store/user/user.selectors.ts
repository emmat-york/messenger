import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { Keys } from '../store';

const futureSelector = createFeatureSelector<UserState>(Keys.User);

export const userData = createSelector(futureSelector, state => state.userData);
export const selectedContact = createSelector(
  futureSelector,
  state => state.selectedContact,
);
