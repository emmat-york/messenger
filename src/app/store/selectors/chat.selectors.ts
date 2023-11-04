import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Keys } from '../enums/store.enums';
import { ChatState } from '../reducers/chat.reducer';

export const featureSelector = createFeatureSelector<ChatState>(Keys.Chat);

export const inputText = createSelector(featureSelector, state => state.inputText);
