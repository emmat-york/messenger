import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { Keys } from '../store';

const futureSelector = createFeatureSelector<UserState>(Keys.User);

export const contacts = createSelector(futureSelector, state => state.contacts);
export const selectedContact = createSelector(
  futureSelector,
  state => state.selectedContact,
);
