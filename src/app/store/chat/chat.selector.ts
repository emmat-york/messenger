import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ChatState} from "./chat.reducer";
import {StoreKey} from "../store";

const featureSelector = createFeatureSelector<ChatState>(StoreKey.Chat);

export const selectInput = createSelector(featureSelector, (state) => state.input);
