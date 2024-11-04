import { AsideView } from '../../pages/messenger/aside/aside.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as action from './aside.action';

export const ASIDE_KEY = 'aside';

export interface AsideState {
  viewType: AsideView;
  searchRequest: string;
}

const initialState: AsideState = {
  viewType: 'dialogs',
  searchRequest: '',
};

export const { selectAsideState, reducer } = createFeature({
  name: ASIDE_KEY,
  reducer: createReducer(
    initialState,
    on(action.setViewType, (state, { viewType }) => ({
      ...state,
      viewType,
    })),
    on(action.setSearchRequest, (state, { searchRequest }) => ({
      ...state,
      searchRequest,
    })),
  ),
});
