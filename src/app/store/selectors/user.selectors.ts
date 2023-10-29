import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Keys } from '../enums/store.enums';
import { UserState } from '../reducers/user.reducer';

const futureSelector = createFeatureSelector<UserState>(Keys.User);

export const contacts = createSelector(futureSelector, state => state.contacts);
