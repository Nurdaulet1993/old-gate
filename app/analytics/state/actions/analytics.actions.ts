import { createAction } from '@ngrx/store';

export enum AnalyticsActionsTypes {
  LOAD = '[ANALYTICS] Load'
}

export const load = createAction(AnalyticsActionsTypes.LOAD);
