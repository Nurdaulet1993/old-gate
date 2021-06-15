import { createAction, props } from '@ngrx/store';

export enum AnalyticsApiActionsTypes {
  LOAD_SUCCESS = '[ANALYTICS API] Load succeed',
  LOAD_FAIL = '[ANALYTICS API] Load failed',
}

export const loadFail = createAction(
  AnalyticsApiActionsTypes.LOAD_FAIL,
  props<{ error: string }>()
);
