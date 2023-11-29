import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';
import { Keys } from '../store';

export const featureSelector = createFeatureSelector<ChatState>(Keys.Chat);

export const inputText = createSelector(featureSelector, state => state.inputText);
