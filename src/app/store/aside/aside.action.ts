import { createAction, props } from '@ngrx/store';
import { AsideView } from '../../pages/messenger/aside/aside.interface';

export const setViewType = createAction(
  '[ASIDE] setViewType',
  props<{ viewType: AsideView }>(),
);

export const setSearchRequest = createAction(
  '[ASIDE] setSearchRequest',
  props<{ searchRequest: string }>(),
);
